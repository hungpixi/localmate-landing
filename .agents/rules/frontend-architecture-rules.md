# Rule 26 — ExportMate Frontend Architecture Rules

Để đảm bảo React SPA của ExportMate kế thừa tốt, tái sử dụng cao và ít copy-paste, tất cả các tác nhân AI (AI Agents) phải tuân thủ nghiêm ngặt các quy tắc phát triển sau:

## 1. Cấu trúc Giao diện 4 tầng
*   **Cấp 1 — Design primitives:** Component nhỏ nhất toàn hệ thống (`Button`, `Input`, `Select`, `Card`, `Modal`...) đặt ở `src/components/ui/`. Tuyệt đối không viết lại button/input riêng cho từng trang.
*   **Cấp 2 — Shared application components:** Component nghiệp vụ dùng chung (`PageHeader`, `DataTable`, `StatusBadge`, `UploadZone`...) đặt ở `src/components/shared/` hoặc `src/components/`.
*   **Cấp 3 — Feature components:** Component của riêng từng module nằm trong `src/features/[feature_name]/components/`.
*   **Cấp 4 — Page composition:** Trang (`Pages`) chỉ gọi dữ liệu qua hooks, điều phối state, ghép components, phân quyền và điều hướng. Không nhét hàng trăm dòng JSX UI chi tiết trực tiếp vào page.

## 2. Quy tắc phát triển giao diện (Antigravity Rules)
1.  **Không tạo component mới** nếu component tương đương đã tồn tại. Luôn tìm trong `src/components/ui`, `src/components/shared`, `src/features/*/components` trước khi viết mới.
2.  **Giới hạn dòng code:** File component chính (Page) không vượt quá 250 dòng. Component con không vượt quá 200 dòng (hãy tách nhỏ nếu có thể).
3.  **Tách API biệt lập:** Không gọi fetch/axios trực tiếp trong component. Định nghĩa trong `features/*/api/*.api.ts` và sử dụng thông qua TanStack Query Custom Hooks.
4.  **Không hard-code** màu sắc, route, permission hoặc status label trực tiếp. Sử dụng Design Token, Config, Union Type và API Metadata.
5.  **Biểu mẫu (Form):** Sử dụng React Hook Form và Zod để validate. Dùng chung một form component cho cả hai chế độ Create (tạo mới) và Edit (chỉnh sửa).
6.  **Danh sách dữ liệu:** Tất cả bảng dữ liệu phải sử dụng component `DataTable` dùng chung, không xây dựng table engine riêng cho từng module.
7.  **Sidebar và Navigation:** Phải được sinh tự động từ file cấu hình (Config).
8.  **Không nhân bản layout:** Sử dụng cơ chế Route Layout kế thừa của React Router để dùng chung Sidebar, Header, responsive shell.
9.  **Trạng thái chung:** Dùng chung các component hiển thị Loading, EmptyState và ErrorState.
10. **Tách biệt luồng phụ thuộc:** Shared component không phụ thuộc feature cụ thể. Feature component không import trực tiếp từ feature khác không liên quan.
11. **Responsive:** Giao diện bắt buộc phải hiển thị chuẩn ở các breakpoint: 360px, 768px, 1024px và 1440px.

## 3. Quy tắc Quản lý Trạng thái (State Management Rules)
1. **Server State:** Dữ liệu từ API/database (`products`, `buyers`, etc.) phải dùng **TanStack Query**. Không lưu trữ dữ liệu backend trong Zustand.
2. **Form State:** Trạng thái nhập liệu phải dùng **React Hook Form**.
3. **UI State:** Trạng thái hiển thị giao diện dùng local state hoặc **Zustand** (cho trạng thái dùng chung toàn app).
4. **URL State:** Trạng thái bộ lọc, phân trang, từ khóa tìm kiếm, tab đang chọn **bắt buộc phải lưu ở URL Search Params** để hỗ trợ refresh và chia sẻ link.

## 4. Trạng thái Giao diện Bắt buộc (States Checklist)
Mỗi trang/component hiển thị danh sách hoặc chi tiết dữ liệu phải xử lý đầy đủ các trạng thái:
* **Loading** (Sử dụng Skeleton/Spinner).
* **Empty** (Khi không có dữ liệu, kèm nút CTA).
* **Error** (Khi API lỗi, có nút Retry).
* **Permission denied** (Không có quyền xem).
* **Offline** (Mất kết nối mạng).

## 5. Định nghĩa Hoàn thành (Definition of Done - DoD)
Một màn hình hoặc tính năng giao diện chỉ được coi là hoàn thành khi thỏa mãn:
* [ ] Đúng thiết kế thương hiệu và hệ thống thiết kế (Design System).
* [ ] Đã responsive tốt trên cả máy tính (Desktop) và di động (Mobile).
* [ ] Đã xử lý đầy đủ các trạng thái giao diện (Loading, Empty, Error).
* [ ] Kết nối API thật hoặc thông qua adapter mock data chuẩn (không hard-code trong components).
* [ ] Có validation biểu mẫu đầy đủ ở cả Client và Server (Zod & React Hook Form).
* [ ] Không còn lỗi hiển thị hoặc cảnh báo trong DevTools Console.
* [ ] Không nhân bản hay trùng lặp code của component đã có.
* [ ] Ứng dụng chạy build production thành công 100%.

*Chi tiết tài liệu thiết kế và ví dụ mã nguồn tham khảo tại [frontend-architecture.md](file:///d:/03-Startups-Products/01-Active-Startups/exportmate-new/.agents/PDR/frontend-architecture.md).*
