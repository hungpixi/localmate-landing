---
name: local-ui-tester
description: Sử dụng Playwright của dự án để chạy thử nghiệm và chụp ảnh màn hình giao diện (Localhost) thay cho subagent browser bị lỗi.
---

# Skill: local-ui-tester

Skill này được thiết kế để thay thế cho Browser Subagent của Antigravity IDE khi bị lỗi driver Playwright. Skill này sử dụng chính Playwright phiên bản mới của dự án để chụp ảnh màn hình localhost, giúp AI Agent có thể nhìn trực tiếp giao diện và phân tích lỗi UI/UX hoặc Responsive.

## Cách sử dụng

### 1. Chụp ảnh màn hình một trang cụ thể
Chạy lệnh PowerShell sau để chụp ảnh màn hình và lưu trực tiếp vào thư mục artifacts của cuộc trò chuyện hiện tại (giúp AI đọc được ảnh):

```powershell
node .agents/skills/local-ui-tester/scripts/capture-page.cjs "<URL_cần_chụp>" "<Đường_dẫn_lưu_ảnh>" <width> <height> <delay_ms> <fullPage>
```

**Các tham số:**
- `URL_cần_chụp`: Mặc định là `http://localhost:5173/dashboard`.
- `Đường_dẫn_lưu_ảnh`: Đường dẫn tuyệt đối dẫn đến file ảnh (nên lưu trong thư mục artifacts, ví dụ `C:\Users\ppnh1\.gemini\antigravity-ide\brain\<conversation-id>\screenshot.png`).
- `width`: Chiều rộng màn hình (mặc định: `1920`).
- `height`: Chiều cao màn hình (mặc định: `1080`).
- `delay_ms`: Thời gian chờ render thêm (mặc định: `2000`ms).
- `fullPage`: Chụp toàn trang hay chỉ phần viewport (mặc định: `true`).

**Ví dụ thực tế (chạy trên PowerShell):**
```powershell
node .agents/skills/local-ui-tester/scripts/capture-page.cjs "https://example.com" "C:\Users\ppnh1\.gemini\antigravity-ide\brain\eeeb9d11-1de8-4251-adce-be48bd576ee2\dashboard_1920.png" 1920 1080 3000
```

### 2. Xử lý đăng nhập (Auth Session Bypass)
* Khi script chạy lần đầu, nếu bị chuyển hướng về trang đăng nhập, hãy chạy script và điền thông tin đăng nhập tự động (hoặc bạn có thể tự đăng nhập một lần, sau đó script sẽ tự động xuất ra file session state lưu tại `.agents/skills/local-ui-tester/scripts/playwright-session.json`).
* Các lần chạy sau, script sẽ tự động nạp session này để vượt qua màn hình đăng nhập mà không cần login lại.

### 3. Phân tích hình ảnh
Sau khi chạy lệnh chụp ảnh thành công, AI Agent sẽ sử dụng file ảnh đó để xem xét thiết kế, kiểm tra xem có bị tràn ngang (overflow) hoặc co cụm layout hay không, và tiếp tục sửa code.
