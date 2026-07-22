# QUY TRÌNH PDCA KAIZEN ĐỐI VỚI DỰ ÁN EXPORTMATE.AI

Tài liệu này hướng dẫn cách vận hành vòng lặp phát triển sản phẩm theo chu trình **PDCA (Plan - Do - Check - Act)** dựa trên dữ liệu phản hồi thực tế từ chương trình pilot 10 doanh nghiệp và chiến lược 3 giai đoạn của Alex Hormozi.

---

## 1. Vòng Lặp Phát Triển Kaizen Đề Án

```text
┌────────────────────────────────────────────────────────┐
│                       PLAN (P)                         │
│  - Phân tích nỗi đau SME & Lập bảng khảo sát           │
│  - Định nghĩa 6 nhóm năng lực Readiness                │
│  - Thiết lập RACI Matrix cho Hưng, Oanh, Trúc, Sang    │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│                        DO (D)                          │
│  - Concierge MVP: Chuẩn hóa hồ sơ thủ công cho 10 DN   │
│  - Lập trình giao diện khảo sát Readiness & Supplier   │
│  - Thu thập tài liệu thật (Catalogue, Cert)            │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│                       CHECK (C)                        │
│  - Đo lường mức độ sẵn sàng chi trả (1M - 5M)          │
│  - Khảo sát PMF (Sean Ellis Test)                      │
│  - Chạy thử Usability Testing với chủ doanh nghiệp     │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│                       ACT (A)                          │
│  - Chuyển thao tác lặp lại thành Playbook & AI Agents  │
│  - Cải tiến câu hỏi khảo sát & Thu hẹp khoảng lệch     │
│  - Sunset các tính năng thủ công không tạo giá trị     │
└───────────────────────────┬────────────────────────────┘
                            │
                            └────── (Vòng lặp tiếp theo) ────┘
```

---

## 2. 3 Giai Đoạn Phát Triển Theo Mô Hình Alex Hormozi

### Giai đoạn 1: Service-Led Validation (Pha DO & CHECK hiện tại)
*   **Mục tiêu**: Sử dụng dịch vụ tư vấn trực tiếp và chuẩn hóa thủ công của đội ngũ để hiểu sâu sắc nghiệp vụ và nỗi đau của khách hàng.
*   **Đầu ra**: 10 doanh nghiệp được pilot hoàn chỉnh hồ sơ, Supplier Page nháp làm tay.
*   **Kiểm chứng**: Xác nhận khách hàng sẵn sàng cung cấp dữ liệu thật và trả phí (2.9M - 9.9M).

### Giai đoạn 2: Productization (Pha ACT)
*   **Mục tiêu**: Đóng gói các quy trình làm tay lặp đi lặp lại thành cấu trúc dữ liệu, mẫu template tự động và các AI Agent chuyên biệt (Sales, Legal, Logistics).
*   **Đầu ra**: Hệ thống tự động trích xuất giấy chứng nhận bằng OCR, tự động chấm điểm Readiness radar chart và gợi ý lộ trình hành động 7/30 ngày.

### Giai đoạn 3: Platform Scale
*   **Mục tiêu**: Cho phép khách hàng tự onboarding, tự cập nhật hồ sơ và tự sử dụng với chi phí biên tiệm cận 0.
*   **Đầu ra**: Hệ thống SaaS tự phục vụ hoàn chỉnh.

---

## 3. Điểm Chặn Phê Duyệt Cột Mốc (Gating)

1.  **Duyệt Pha PLAN**: Bản câu hỏi khảo sát 6 nhóm năng lực phải được **Oanh** duyệt tính chính xác nghiệp vụ trước khi Hưng đưa vào code database.
2.  **Duyệt Pha DO**: Bản thiết kế Supplier Page song ngữ của **Sang** phải được duyệt bởi **Trúc** về tính thương mại (phù hợp với thị hiếu của buyers quốc tế).
3.  **Duyệt Pha CHECK**: Báo cáo tài chính và chi phí phục vụ một khách hàng (Unit Economics) phải đạt mức hòa vốn ở 7-8 khách hàng.
