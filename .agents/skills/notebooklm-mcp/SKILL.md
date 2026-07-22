---
name: notebooklm-mcp
description: Hướng dẫn thiết lập, xác thực và sử dụng NotebookLM MCP Server trên Antigravity để quản lý sổ tay, nguồn tài liệu và nghiên cứu xuất khẩu B2B.
triggers:
  - notebooklm mcp
  - notebooklm server
  - tich hop notebooklm
  - google notebooklm
---

# SKILL: TÍCH HỢP & SỬ DỤNG NOTEBOOKLM MCP SERVER

Tài liệu này hướng dẫn chi tiết cách thiết lập, xác thực tài khoản Google và tích hợp NotebookLM MCP Server vào IDE Antigravity để tận dụng toàn bộ sức mạnh quản lý sổ tay dữ liệu xuất khẩu B2B.

---

## 🛠️ 1. Quy Trình Thiết Lập

### Bước 1: Cài đặt Máy chủ MCP
Cài đặt global gói npm của máy chủ MCP NotebookLM:
```bash
npm install -g notebooklm-mcp-server
```

### Bước 2: Xác thực Google
Chạy lệnh xác thực để mở trình duyệt của người dùng và cấp quyền truy cập các sổ tay (Notebooks) trong tài khoản Google:
```bash
npx notebooklm-mcp-server auth
```

### Bước 3: Cấu hình mcp_config.json
Thêm NotebookLM server vào file cấu hình MCP của Antigravity tại đường dẫn:
`C:\Users\ppnh1\.gemini\config\mcp_config.json`

Cấu hình JSON chi tiết:
```json
{
  "mcpServers": {
    "notebooklm": {
      "command": "npx",
      "args": ["-y", "notebooklm-mcp-server", "start"]
    }
  }
}
```

---

## 🚀 2. Các Tính Năng & Lệnh Tự Động Hóa

Sau khi cài đặt và cấu hình thành công, Antigravity có thể gọi trực tiếp các công cụ của NotebookLM MCP để:

1. **Quản lý Sổ tay (Notebooks)**:
   * Liệt kê các sổ tay: `list_notebooks`
   * Tạo sổ tay mới: `create_notebook`
   * Xóa sổ tay: `delete_notebook`
2. **Quản lý Nguồn (Sources)**:
   * Thêm liên kết website, video YouTube hoặc file Google Drive vào sổ tay: `add_source`
3. **Nghiên cứu & Đối soát**:
   * Truy vấn thông tin sâu rộng từ toàn bộ tài liệu nguồn: `query_notebook`
   * Tạo Audio Overview (Podcast MP3) hoặc sơ đồ tư duy (mindmap JSON) từ sổ tay.

---

## 🔍 3. Hướng Dẫn Truy Vấn Dữ Liệu Xuất Khẩu

Để truy tìm các tài liệu xuất khẩu đã có sẵn trong NotebookLM của bạn:
1. Chạy `list_notebooks` để quét toàn bộ danh sách sổ tay hiện có.
2. Tìm sổ tay có tên liên quan đến "Xuất khẩu", "ExportMate" hoặc "Nông sản".
3. Chạy `query_notebook` với câu hỏi chi tiết để trích xuất nội dung 5 file xuất khẩu mà bạn cần.
