# 📐 Quy tắc Kiến trúc Frontend SPA 4 Tầng (Frontend Architecture Rules)

Quy tắc này bắt buộc áp dụng khi viết hoặc chỉnh sửa bất kỳ tệp giao diện (React SPA) nào trong ExportMate để tránh lặp code, tăng tính kế thừa và giữ cấu trúc gọn gàng.

---

## 1. Phân chia 4 Cấp giao diện (SPA Layers)
1.  **Cấp 1 — Design primitives (`src/components/ui/`):** Component UI nhỏ nhất không có logic nghiệp vụ: `Button`, `Input`, `Select`, `Badge`, `Avatar`, `Card`, `Modal`, `Table`, `Progress`, `Skeleton`, `EmptyState`.
2.  **Cấp 2 — Shared application components (`src/components/shared/`):** Component biểu diễn nghiệp vụ chung ở nhiều nơi: `PageHeader`, `DataTable`, `StatusBadge`, `UploadZone`, `Timeline`.
3.  **Cấp 3 — Feature components (`src/features/[feature_name]/components/`):** Component riêng biệt của từng module: `ProductForm.tsx`, `ProductTable.tsx`.
4.  **Cấp 4 — Page composition (`src/pages/` hoặc `src/features/[feature_name]/pages/`):** Trang chính ghép nối dữ liệu và components. **Không vượt quá 250 dòng code**.

---

## 2. Quy tắc phát triển cụ thể (Antigravity Rules)
1.  **Tái sử dụng trước, viết mới sau:** Không tạo component mới nếu component tương đương đã tồn tại. Luôn kiểm tra `src/components/ui` và `src/components/shared`.
2.  **Tách API biệt lập:** Tuyệt đối không gọi `fetch()` hoặc `axios` trực tiếp trong component. Viết các hàm API tại `src/features/[feature]/api/[feature].api.ts` và sử dụng thông qua Custom Hooks (React Query).
3.  **Form dùng chung:** Create (tạo mới) và Edit (chỉnh sửa) bắt buộc phải dùng chung một Form component (ví dụ: `ProductForm.tsx`) phân biệt qua state `mode` hoặc `defaultValues`. Sử dụng React Hook Form và Zod để validate.
4.  **Danh sách dữ liệu dùng chung:** Tất cả các bảng danh sách bắt buộc phải sử dụng component `DataTable` dùng chung (`src/components/shared/DataTable.tsx`), không xây dựng công cụ render bảng riêng cho từng trang.
5.  **Sidebar chạy bằng config:** Thanh Sidebar và menu điều hướng phải được sinh tự động từ cấu hình (Config) tại `src/layout/AppSidebar.tsx`, cấm hard-code menu trong JSX.
6.  **Responsive chặt chẽ:** Tất cả giao diện phải hiển thị chuẩn xác ở các breakpoints: 360px, 768px, 1024px và 1440px. Giới hạn chiều rộng container chính `max-w-[1440px] mx-auto`.
7.  **Scrollbar B2B:** Mọi thanh cuộn phải có chiều rộng tối đa 6px, track trong suốt, tự động đổi màu khi hover (`custom-scrollbar` hoặc `custom-scrollbar-thin`).

---

## 3. Technology Stack Phân vai rõ ràng
*   **TanStack Query:** Cache và quản lý dữ liệu server-state.
*   **Zustand:** Quản lý client-state toàn cục rất nhẹ (như Workspace hiện tại, Theme).
*   **React Hook Form:** Quản lý trạng thái biểu mẫu (form state).
*   **URL Search Params:** Lưu trạng thái bộ lọc (filters), phân trang, tabs hoạt động.
*   **LocalStorage:** Lưu tùy chọn cá nhân nhẹ (preferences).
