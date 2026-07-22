# Multi-Subagent Swarm & Phase Execution Standard

Quy chuẩn làm việc tối ưu hóa cho các Prompt phức tạp / siêu dài của Antigravity Agent trên ExportMate.

---

## 1. Nguyên Tắc Cốt Lõi (Core Swarm Execution Pattern)

Khi nhận prompt dài, yêu cầu kiểm định toàn diện hoặc cải tạo lớn:
1. **Phân Rã Chuyên Môn Đa Agent (Multi-Subagent Swarm)**: Tự động chia task thành các vai trò độc lập và invoke song song 10+ subagents (mỗi subagent chịu trách nhiệm 1 mảng chuyên sâu: Backend Security, DB Architect, UI Visual Fidelity, UX Flow, Responsive QA, Real Data Integration, v.v.).
2. **Triển Khai Theo Phase & Tuần Tự (Phase-by-Phase Remediation)**:
   - Gom task thành 5-6 Phase rõ ràng.
   - Với mỗi Phase, invoke nhóm 3-5 subagents chuyên biệt thực thi song song để tối đa hóa tốc độ.
   - Sau mỗi Phase, chạy ngay verification (`npm run typecheck`, `npm run build`) để bảo đảm zero regression.
3. **Chấm Điểm & Đánh Giá Định Lượng (Quantitative Scorecard)**:
   - Xây dựng bảng tiêu chí chấm điểm định lượng (thang điểm 0-5 cho Backend/DB, 25 điểm cho Visual Fidelity).
   - Đưa ra quyết định **Release Gate** minh bạch: `APPROVED` hoặc `REJECTED - REMEDIATION REQUIRED`.
4. **Lưu Trữ Tri Thức Cục Bộ (Persistence in `.agents/`)**:
   - Lưu bộ tiêu chí vào `.agents/rules/`.
   - Lưu nguyên nhân gốc rễ (RCA) và phát hiện vào `.agents/learnings/`.
   - Lưu báo cáo tổng thể vào `docs/audits/`.

---

## 2. Quy Trình 5 Phase Chuẩn

- **Phase 1 (Security & CSDL)**: Multi-Tenant `workspace_id`, Kiểu dữ liệu `@db.Decimal(18, 4)`, Auth Guards, `prisma.$transaction`.
- **Phase 2 (Giao diện Visual)**: Anti-Glassmorphism, Nền phẳng B2B, Chuẩn palette Primary Navy/Teal/Action Blue, Thay Unicode Emoji bằng Lucide SVG Icons, Sửa Sidebar offset.
- **Phase 3 (UX & Navigation)**: Sửa 404 links, khôi phục Ghost APIs, mở rộng Navigation IA Sidebar 15+ B2B items, thay `alert()` bằng Modal/Drawer tương tác.
- **Phase 4 (Real Data & Form Submits)**: Gỡ bỏ dữ liệu tĩnh fallback, dùng TanStack Query `useQuery`, thay form `setTimeout` bằng `async/await` fetch API thật, 1 `PageContainer` SSOT.
- **Phase 5 (Anti-Overflow & Accessibility)**: Bỏ fixed chart width 1000px, container heights linh hoạt, cuộn ngang local cho tables, `title` cho text `truncate`, `aria-label` cho icon buttons.

---

## 3. Quy Định Verify & Release

- Mọi đợt làm việc phải tự động kiểm tra `npm run typecheck` và `npm run build`.
- Chỉ coi là hoàn thành khi build production pass 100% không có lỗi type hoặc bundler.
- Thực hiện `git add`, `git commit` và `git push` theo đúng **Rule 14 (Micro-Commits & Verified-First)**.
