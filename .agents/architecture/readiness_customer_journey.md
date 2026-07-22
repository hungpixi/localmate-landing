# PHẦN B: QUY TRÌNH HÀNH TRÌNH KHÁCH HÀNG (PROPOSED CUSTOMER JOURNEY)

**Phiên bản:** 2.0.0  
**Đối tượng áp dụng:** Doanh nghiệp Xuất khẩu B2B  

---

## I. TỔNG QUAN HÀNH TRÌNH 6 BƯỚC (6-STEP CUSTOMER JOURNEY)

```
┌────────────────────────────────────────────────────────┐
│  Bước 1: Hoàn thành khảo sát (Survey Submission)       │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│  Bước 2: Màn hình chuyển tiếp & Chẩn đoán ban đầu      │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│  Bước 3: Chọn Sản phẩm & Thị trường Mục tiêu cụ thể    │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│  Bước 4: Sinh Lộ trình Hành động có điều kiện (Action) │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│  Bước 5: Thực thi Nhiệm vụ & Nộp Bằng chứng (Evidence)│
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│  Bước 6: Xác minh Bằng chứng & Tự động Tính lại Điểm   │
└────────────────────────────────────────────────────────┘
```

---

## II. CHI TIẾT TỪNG BƯỚC HÀNH TRÌNH

### Bước 1 — Hoàn thành Khảo sát (Survey Submission)
- Doanh nghiệp trả lời các câu hỏi tự khai báo về năng lực sản xuất, quy trình và hạ tầng.
- **Quy tắc UI**: Không đưa thẳng người dùng vào Dashboard phức tạp ngay lập tức.

### Bước 2 — Màn hình Chuyển tiếp & Chẩn đoán Ban đầu (Initial Diagnosis)
- Hiển thị màn hình trung gian trong 2 giây:
  > "ExportMate đã phân tích xong sản phẩm Cà phê nhân xanh cho thị trường Đức."
- Cho thấy: Số câu đã trả lời, Số điểm cần xác minh, Độ tin cậy hiện tại.
- 3 thông số duy nhất: Bạn đang ở đâu (62%), Điều gì đang cản trở (Truy xuất nguồn gốc), Việc nên làm tiếp (Khai báo vùng trồng).

### Bước 3 — Chọn Phạm vi Lộ trình (Context Confirmation)
- Cho phép người dùng xác nhận: Sản phẩm master, Mã HS, Thị trường mục tiêu (ví dụ: Đức EU), Ngân sách & Nguồn lực hiện có.

### Bước 4 — Sinh Lộ trình Hành động có Điều kiện (Conditional Action Roadmap)
- Hệ thống sinh lộ trình 5 giai đoạn:
  1. Chuẩn hóa hồ sơ
  2. Xác minh sản phẩm
  3. Đáp ứng thị trường
  4. Chuẩn bị chào hàng
  5. Buyer-Ready
- Mỗi nhiệm vụ phải gắn với: `Reason`, `RequirementSource`, `Owner`, `Duration`, `ExpectedScoreImpact`, `RequiredEvidence`.

### Bước 5 — Thực thi Nhiệm vụ & Nộp Bằng chứng (Evidence Upload)
- Người dùng thực hiện nhiệm vụ (ví dụ: Tải file tọa độ GPS Polygons hoặc scan ISO 22000).
- Trạng thái bằng chứng chuyển từ `Chưa cung cấp` ➔ `Đã tải lên` ➔ `Đang xác minh`.

### Bước 6 — Xác minh Bằng chứng & Tự động Tính lại Điểm (Recalculation Trigger)
- **QUY TẮC VÀNG**: Điểm `verifiedScore` CHỈ TĂNG khi trạng thái bằng chứng chuyển thành `ĐÃ XÁC MINH` (`VERIFIED`).
- Đạt mốc 80%+ verified score ➔ Hệ thống cấp trạng thái **Buyer-Ready**.
