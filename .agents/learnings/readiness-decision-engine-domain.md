# Learnings: Export Readiness Decision Engine & Workspace SSOT Architecture

Dưới đây là 5 bài học cốt lõi rút ra từ đợt tái thiết kế nghiệp vụ Xuất khẩu B2B cho ExportMate:

## 1. Nguyên tắc Nghiệp vụ Trước, Giao diện Sau (Domain-First Over UI-First)
- **Sai lầm cần tránh:** Nhảy ngay vào thiết kế giao diện hay tạo bộ câu hỏi trắc nghiệm suông khi chưa định hình luồng ra quyết định.
- **Bài học:** Readiness KHÔNG PHẢI là trang khảo sát tĩnh (Static Quiz) hay bảng điểm tự khai, mà là một **Decision Engine (Động cơ Ra quyết định)** liên tục đánh giá tổ hợp 3 chiều:
  $$\text{Subject} = (\text{Company / Factory}, \text{Product / HS Code}, \text{Target Market})$$

## 2. Workspace là Single Source of Truth (SSOT)
- Workspace không phải trang cài đặt thông tin cá nhân cơ bản mà là **Master Data Hub** gồm 8 khối dữ liệu gốc:
  1. Pháp nhân (Legal Entity & EORI)
  2. Nhà máy & Vùng trồng (Factory & GPS Polygons EUDR)
  3. Sản phẩm & Mã HS (Product Spec & Packaging)
  4. Kho Chứng nhận (Certificate Expiration Tracker)
  5. Kho Chứng từ (Document Vault)
  6. Chiến lược Thị trường (Market Strategy)
  7. Ekip & Phân quyền (Team & Access Control)
  8. Lịch sử Thay đổi (Audit Trail)

## 3. Ma trận Khóa Tính năng Dựa trên Trạng thái (Feature Locks Matrix)
- Trạng thái đánh giá điều khiển trực tiếp quyền hạn người dùng trên hệ thống:
  - **`BLOCKED` (🛑):** Khóa nút gửi RFQ, khóa xuất bản Supplier Profile công khai, chặn tải Pitching Kit.
  - **`CONDITIONAL` (🟡):** Cho phép nộp Draft RFQ nội bộ nhưng cảnh báo rủi ro pháp lý cho phòng XNK.
  - **`READY` (🟢):** Cấp Huy hiệu Verified Supplier Passport & Mở full chào giá B2B.

## 4. Phân tầng Bằng chứng Xác minh (Accepted Evidence Tier)
- Tuyên bố tự khai (Self-declare) **không có giá trị kích hoạt trạng thái READY**.
  - **Tier 1 (Hard Evidence):** Scan ISO/HACCP/FDA, Phiếu test Lab (Quatest, Eurofins, SGS).
  - **Tier 2 (Nguồn gốc):** File Tọa độ GPS Polygons nông hộ, Giấy C/O Form EUR.1/E/VJ.
  - **Tier 3 (Sản phẩm):** Spec sheet, Ảnh nhãn mác thực tế.

## 5. In-Memory Micro-Cache & Link Pháp lý Chính thống
- Cache sẵn dữ liệu Mã HS & Cảnh báo Nghị định trong RAM Server (`hsCacheService.ts`) để độ trễ <5ms.
- Tất cả URL nguồn pháp lý phải là tên miền chính phủ thật 100% (`customs.gov.vn`, `mard.gov.vn`, `eur-lex.europa.eu`, `federalregister.gov`, `gacc.customs.gov.cn`).
