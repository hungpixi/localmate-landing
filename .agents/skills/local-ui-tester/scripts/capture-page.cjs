const { chromium } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

// Nhận tham số từ terminal
const url = process.argv[2] || 'http://localhost:5173/dashboard';
const outputPath = process.argv[3] || path.join(process.cwd(), 'screenshot.png');
const width = parseInt(process.argv[4]) || 1920;
const height = parseInt(process.argv[5]) || 1080;
const delay = parseInt(process.argv[6]) || 2000;
const fullPage = process.argv[7] === 'false' ? false : true;

// Đường dẫn file lưu session đăng nhập để tái sử dụng
const sessionPath = path.join(path.dirname(__filename), 'playwright-session.json');

(async () => {
  console.log(`[Local-UI-Tester] Khởi chạy trình duyệt...`);
  const browser = await chromium.launch({ headless: true });
  
  // Cấu hình context, nạp session đăng nhập nếu có
  let contextOptions = {
    viewport: { width, height },
    deviceScaleFactor: 1,
  };
  
  if (fs.existsSync(sessionPath)) {
    console.log(`[Local-UI-Tester] Phát hiện file session cũ, tiến hành khôi phục đăng nhập...`);
    contextOptions.storageState = sessionPath;
  }
  
  const context = await browser.newContext(contextOptions);
  const page = await context.newPage();
  
  console.log(`[Local-UI-Tester] Đang truy cập: ${url}`);
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  } catch (err) {
    console.warn(`[Local-UI-Tester] Cảnh báo: Trang load quá lâu hoặc timeout, tiếp tục chụp ảnh. Chi tiết: ${err.message}`);
  }
  
  // Đợi thêm để hiệu ứng animation/render kết thúc
  console.log(`[Local-UI-Tester] Đợi thêm ${delay}ms...`);
  await page.waitForTimeout(delay);
  
  // Chụp ảnh màn hình
  console.log(`[Local-UI-Tester] Đang chụp ảnh màn hình...`);
  await page.screenshot({ path: outputPath, fullPage: fullPage });
  console.log(`[Local-UI-Tester] Lưu ảnh thành công tại: ${outputPath}`);
  
  // Nếu trang hiện tại là trang Dashboard và chưa lưu session đăng nhập, ta lưu lại để lần sau dùng tiếp
  const currentUrl = page.url();
  if (currentUrl.includes('/dashboard') && !fs.existsSync(sessionPath)) {
    console.log(`[Local-UI-Tester] Lưu lại session đăng nhập để tái sử dụng...`);
    await context.storageState({ path: sessionPath });
  }
  
  await browser.close();
  console.log(`[Local-UI-Tester] Đã đóng trình duyệt. Hoàn thành!`);
})();
