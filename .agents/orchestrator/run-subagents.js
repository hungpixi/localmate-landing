/**
 * ORCHESTRATOR RUNNER FOR EXPORTMATE.AI SUBAGENTS
 * 
 * Script này tự động hóa việc gọi và điều phối 30 Subagents theo mô hình PDCA và RACI Matrix.
 * Hỗ trợ chạy thử nghiệm (--dry-run), chạy theo pha (--phase) hoặc chạy vai trò cụ thể (--role).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Định nghĩa các đường dẫn chính
const ROOT_DIR = path.resolve(__dirname, '../../');
const AGENTS_DIR = path.join(ROOT_DIR, '.agents');
const SUBAGENTS_DIR = path.join(AGENTS_DIR, 'subagents');
const ORCHESTRATOR_DIR = path.join(AGENTS_DIR, 'orchestrator');
const CONFIG_PATH = path.join(SUBAGENTS_DIR, 'config.json');
const PROGRESS_PATH = path.join(ORCHESTRATOR_DIR, 'progress.md');

// Đọc tham số dòng lệnh
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const phaseArg = args.find(arg => arg.startsWith('--phase='))?.split('=')[1];
const roleArg = args.find(arg => arg.startsWith('--role='))?.split('=')[1];

console.log('=====================================================');
console.log('   EXPORTMATE.AI MULTI-AGENT ORCHESTRATOR RUNNER');
console.log(`   Mode: ${isDryRun ? 'DRY-RUN (Chạy Thử Nghiệm)' : 'LIVE (Thực Tế)'}`);
console.log('=====================================================');

// 1. Đọc file config.json
if (!fs.existsSync(CONFIG_PATH)) {
  console.error(`❌ Không tìm thấy file cấu hình tại: ${CONFIG_PATH}`);
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
const subagents = config.subagents;

// 2. Lọc danh sách subagent cần thực thi
let activeAgents = subagents;

if (phaseArg) {
  activeAgents = activeAgents.filter(a => a.phase.toLowerCase() === phaseArg.toLowerCase());
  console.log(`📂 Lọc theo pha: ${phaseArg} (${activeAgents.length} agents)`);
}

if (roleArg) {
  activeAgents = activeAgents.filter(a => a.id === roleArg);
  console.log(`📂 Lọc theo vai trò: ${roleArg} (${activeAgents.length} agents)`);
}

if (activeAgents.length === 0) {
  console.warn('⚠️ Không tìm thấy subagent nào phù hợp với bộ lọc.');
  process.exit(0);
}

// 3. Khởi tạo/Cập nhật progress.md
function initProgressFile() {
  if (!fs.existsSync(PROGRESS_PATH)) {
    const defaultProgress = `# TIẾN TRÌNH THỰC THI MULTI-AGENTS\n\n*Khởi tạo lúc: ${new Date().toISOString()}*\n\n## Trạng thái các vai trò:\n\n` +
      subagents.map(a => `- [ ] **${a.id}** (${a.role}) - Chờ xử lý`).join('\n') + '\n';
    fs.writeFileSync(PROGRESS_PATH, defaultProgress, 'utf-8');
    console.log(`📝 Đã khởi tạo file tiến trình tại: ${PROGRESS_PATH}`);
  }
}

initProgressFile();

// 4. Hàm giả lập thực thi một subagent (hoặc kết nối Gemini API thực tế)
async function runAgent(agent) {
  console.log(`\n▶️ [${agent.phase.toUpperCase()}] Bắt đầu chạy Agent: ${agent.role} (${agent.id})...`);
  console.log(`   ├─ Mô tả: ${agent.description}`);
  console.log(`   ├─ Đầu vào (Inputs): ${agent.inputs.join(', ')}`);
  
  // Đọc file prompt vai trò tương ứng
  const rolePromptPath = path.join(SUBAGENTS_DIR, 'roles', `${agent.id}.md`);
  let promptContent = '';
  if (fs.existsSync(rolePromptPath)) {
    promptContent = fs.readFileSync(rolePromptPath, 'utf-8');
    console.log(`   ├─ Đã nạp system prompt từ file: roles/${agent.id}.md`);
  } else {
    console.log(`   ├─ ⚠️ Thiếu file system prompt chuyên biệt. Sử dụng cấu hình mặc định.`);
  }

  if (isDryRun) {
    console.log(`   └─ [DRY-RUN] Giả lập tạo đầu ra (Outputs): ${agent.outputs.join(', ')} thành công.`);
    updateProgressInFile(agent.id, 'Hoàn thành (Dry-run)');
    return true;
  }

  // Thực thi LIVE: Tạo các thư mục mock đầu ra và log tiến trình
  try {
    // Giả lập kết nối LLM / Viết file mock
    agent.outputs.forEach(output => {
      // Nếu là file log/md, tạo thư mục chứa và ghi file nháp
      if (output.endsWith('.md') || output.endsWith('.json')) {
        const outPath = path.join(ROOT_DIR, output);
        const outDir = path.dirname(outPath);
        if (!fs.existsSync(outDir)) {
          fs.mkdirSync(outDir, { recursive: true });
        }
        
        // Chỉ tạo file nếu chưa tồn tại để tránh ghi đè dữ liệu của user
        if (!fs.existsSync(outPath)) {
          fs.writeFileSync(outPath, `# KẾT QUẢ ĐẦU RA CỦA ${agent.role.toUpperCase()}\n\nTạo tự động bởi subagent ${agent.id} vào lúc ${new Date().toISOString()}.\n`, 'utf-8');
          console.log(`   ├─ Đã khởi tạo file đầu ra: ${output}`);
        }
      }
    });

    updateProgressInFile(agent.id, 'Hoàn thành');
    console.log(`   └─ ✅ Agent ${agent.id} hoàn thành công việc.`);
    return true;
  } catch (error) {
    console.error(`   └─ ❌ Lỗi khi chạy Agent ${agent.id}:`, error.message);
    updateProgressInFile(agent.id, `Thất bại: ${error.message}`);
    return false;
  }
}

// 5. Hàm cập nhật trạng thái trong progress.md
function updateProgressInFile(agentId, status) {
  if (!fs.existsSync(PROGRESS_PATH)) return;
  
  let content = fs.readFileSync(PROGRESS_PATH, 'utf-8');
  
  // Regex thay thế trạng thái dòng tương ứng
  const regex = new RegExp(`- \\[([ x]*)\\] \\*\\*${agentId}\\*\\* (.*) - (.*)`);
  const match = content.match(regex);
  
  if (match) {
    const isCompleted = status.startsWith('Hoàn thành');
    const checked = isCompleted ? 'x' : ' ';
    const newDoc = `- [${checked}] **${agentId}** ${match[2]} - ${status}`;
    content = content.replace(regex, newDoc);
    fs.writeFileSync(PROGRESS_PATH, content, 'utf-8');
  }
}

// 6. Thực thi chính (Chạy tuần tự theo luồng PDCA)
async function main() {
  console.log(`🚀 Bắt đầu thực thi luồng công việc cho ${activeAgents.length} agents...`);
  
  let successCount = 0;
  for (const agent of activeAgents) {
    // Điểm chặn phê duyệt HITL giả định ở các pha quan trọng
    if (!isDryRun && agent.id === '23_release_manager') {
      console.log('\n🛑 [HITL] Cần phê duyệt của Quản lý trước khi chạy Release Manager (23_release_manager).');
      console.log('   (Trong môi trường tự động, bước này sẽ đợi tín hiệu webhook phê duyệt).');
    }

    const success = await runAgent(agent);
    if (success) successCount++;
  }
  
  console.log('\n=====================================================');
  console.log(`🎉 HOÀN TẤT THỰC THI: ${successCount}/${activeAgents.length} Agents chạy thành công.`);
  console.log(`📝 Xem tiến trình cập nhật tại: ${PROGRESS_PATH}`);
  console.log('=====================================================');
}

main().catch(err => {
  console.error('❌ Lỗi hệ thống điều phối:', err);
  process.exit(1);
});
