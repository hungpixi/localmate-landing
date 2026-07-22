# PHẦN C: WIREFRAME & THIẾT KẾ CẤU TRÚC GIAO DIỆN (UI/UX LAYOUT)

**Phiên bản:** 2.0.0  
**Tác giả:** ExportMate UI/UX Design Team  

---

## I. TỔNG QUAN BỐ CỤC KHÔNG GIAN (PAGE LAYOUT)

Container chuẩn: `max-w-[1200px] mx-auto space-y-8 bg-[#F5F8FA] text-[#17212B]`.

```text
┌────────────────────────────────────────────────────────────────────────┐
│ KHỐI 1: READINESS EXECUTIVE SUMMARY                                    │
│ ┌──────────────────────────────────────────┬─────────────────────────┐ │
│ │ Bên Trái (65%): Status & CTA Hero        │ Bên Phải (35%): Compact │ │
│ │ • 62% - Chưa đủ điều kiện Buyer-Ready    │ Radar Chart (~280px)    │ │
│ │ • Sản phẩm: Cà phê Robusta (0901.11.10)  │ • Điểm mạnh: Sản xuất   │ │
│ │ • Thị trường mục tiêu: Đức (EU)          │ • Điểm yếu: Truy xuất   │ │
│ │ • CTA Chính: [Khai báo tọa độ vùng trồng]│ • Min/Max dimension     │ │
│ └──────────────────────────────────────────┴─────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ KHỐI 2: ƯU TIÊN CẦN XỬ LÝ NGAY (Priority Blocker & Issues Table)       │
│ • Bảng thống nhất Blocker P0 & Warning P1 kèm Score Impact (+9, +6, +4)│
├────────────────────────────────────────────────────────────────────────┤
│ KHỐI 3: VIỆC TIẾP THEO CỦA BẠN (Top 3-5 Actionable Tasks)              │
│ • Task Cards: Tên task, lý do, người phụ trách, deadline, CTA trực tiếp│
├────────────────────────────────────────────────────────────────────────┤
│ KHỐI 4: LỘ TRÌNH 5 GIAI ĐOẠN (5-Stage Actionable Roadmap Accordion)    │
│ 1. Chuẩn hóa hồ sơ  2. Xác minh sản phẩm  3. Đáp ứng thị trường ...   │
├────────────────────────────────────────────────────────────────────────┤
│ KHỐI 5: BẰNG CHỨNG VÀ XÁC MINH (Evidence Verification Matrix)          │
│ • Bảng quản lý trạng thái bằng chứng (Chưa nộp, Đang xác minh, Valid)  │
├────────────────────────────────────────────────────────────────────────┤
│ KHỐI 6: PHÂN TÍCH CHI TIẾT & LỊCH SỬ ĐIỂM (Detailed Analysis Drawer)   │
│ • Mở rộng phân tích sâu ở khu vực thứ cấp                              │
└────────────────────────────────────────────────────────────────────────┘
```

---

## II. CHI TIẾT 6 KHỐI GIAO DIỆN MỚI

### Khối 1 — Readiness Executive Summary (Chia 65% / 35%)
- **Bên Trái (65%)**:
  - Badge trạng thái: `🔴 CHƯA ĐỦ ĐIỀU KIỆN TIẾP CẬN BUYER ĐỨC`.
  - Con số chủ đạo: `62%` (Sẵn sàng cho thị trường Đức).
  - Phân ranh con số: `Tự khai báo: 78/100 | Đã xác minh bằng chứng: 52/100`.
  - Mô tả cô đọng: "Còn 1 điều kiện bắt buộc (EUDR GPS) và 4 bằng chứng cần nộp."
  - **CTA Chính (Primary CTA)**: Nút màu Teal `#00A889` kích thước lớn: `[Khai báo tọa độ vùng trồng nông hộ]`.
  - **CTA Phụ (Secondary CTA)**: Nút viền outline: `[Xem chi tiết kết quả đánh giá]`.
- **Bên Phải (35%)**:
  - Radar Chart thu nhỏ kích thước ~280px-340px.
  - Chú thích bên dưới:
    - 🟢 Điểm mạnh nhất: Năng lực sản xuất (90/100)
    - 🔴 Điểm yếu nhất: Truy xuất nguồn gốc (20/100)
    - 📄 Đã xác minh: 7/15 bằng chứng.

### Khối 2 — Ưu tiên Cần xử lý Ngay (Unified Priority Table)
- Không dùng 2 card màu quá gắt. Dùng 1 bảng thống nhất có phân loại màu nhẹ nhàng:
  - **Chặn xuất khẩu (P0)**: Tọa độ GPS vùng trồng | Lý do: Yêu cầu EUDR | Tác động: `+9 điểm` | CTA: `[Khai báo ngay]`
  - **Quan trọng (P1)**: Product Spec Sheet tiếng Anh | Lý do: Buyer yêu cầu | Tác động: `+6 điểm` | CTA: `[Tạo hồ sơ]`
  - **Cần bổ sung (P2)**: Kết quả test Lab dư lượng | Lý do: Xác minh MRL | Tác động: `+4 điểm` | CTA: `[Tìm đối tác]`

### Khối 3 — Việc Tiếp theo của Bạn (Top 3-5 Action Tasks)
- Chỉ hiển thị 3-5 công việc gần nhất cần làm.
- Mỗi card chứa: Tên task, Lý do nghiệp vụ, Người phụ trách, Thời gian ước tính (~30m), Tác động điểm số (`+6 readiness`), Nút CTA hành động trực tiếp.

### Khối 4 — Lộ trình 5 Giai đoạn (5-Stage Actionable Roadmap Accordion)
- Giai đoạn 1: Chuẩn hóa hồ sơ doanh nghiệp
- Giai đoạn 2: Đáp ứng yêu cầu thị trường Đức (Đang thực hiện - 2/5 task)
- Giai đoạn 3: Xác minh chứng nhận & Kiểm định Lab
- Giai đoạn 4: Chuẩn bị bộ tài liệu chào hàng
- Giai đoạn 5: Buyer-Ready & Tiếp cận đối tác

### Khối 5 — Bằng chứng và Xác minh (Evidence & Verification Matrix)
- Bảng hiển thị danh mục tài liệu: Tên bằng chứng, Tiêu chí liên quan, Trạng thái (`Chưa nộp`, `Đang xác minh`, `Đã xác minh`, `Bị từ chối`, `Sắp hết hạn`), Hạn dùng, Nguồn trích dẫn.

### Khối 6 — Phân tích Chi tiết & Lịch sử Điểm
- Nằm ở khu vực thứ cấp cuối trang hoặc mở ra qua Drawer khi cần đào sâu.
