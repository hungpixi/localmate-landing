# MA TRẬN RACI ĐỘI NGŨ SÁNG LẬP EXPORTMATE.AI

Tài liệu này phân định trách nhiệm cụ thể của 4 thành viên sáng lập trong quá trình phát triển và vận hành đề án ExportMate.AI:
*   **Hưng**: Product Strategy, System Architecture, Tech, Code.
*   **Oanh**: Nghiệp vụ xuất khẩu, kiểm tra nội dung chuyên môn, vấn đề thị trường.
*   **Trúc**: Phát triển khách hàng, go-to-market, đối tác, tài chính, doanh thu.
*   **Sang**: Truyền thông, nội dung, trải nghiệm người dùng (UX/UI).

---

## 1. Bảng Ma Trận RACI Dự Án

| Deliverables (Sản phẩm bàn giao) | Hưng (Tech) | Oanh (Nghiệp vụ) | Trúc (GTM) | Sang (UX/UI) | Ghi chú |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **1. Khảo sát thị trường & Đối thủ** | I | C | **A** | R | Xác định nỗi đau và phân khúc ban đầu |
| **2. Định nghĩa MVP & Giá bán** | R | C | **A** | I | Xác định 6 nhóm năng lực và gói 2.9M - 9.9M |
| **3. Nội dung 6 nhóm năng lực Readiness**| I | **A** | C | R | Doanh nghiệp, Sản phẩm, Bao bì, Chứng nhận... |
| **4. Đặc tả User Stories & Use Cases** | **A** | C | I | R | Sắp xếp hành trình điền form & lộ trình hành động |
| **5. Thiết kế DB Schema & API Spec** | **A** | I | I | I | Xây dựng cơ sở dữ liệu SQLite & API trích xuất |
| **6. Thiết kế UX/UI & Prototype** | C | C | I | **A** | Bản thiết kế Figma / HTML tĩnh |
| **7. Lập trình Core Backend & DB Seed** | **A** | I | I | I | Code APIs tính điểm, seed dữ liệu Readiness |
| **8. Code Frontend UI & Components** | R | I | I | **A** | Tích hợp giao diện TailAdmin phẳng |
| **9. Kiểm định pháp lý tài liệu/OCR** | I | **A** | I | C | Kiểm tra tính chính xác của hồ sơ đính kèm |
| **10. Chạy thử nghiệm pilot 10 DN** | I | C | **A** | R | Đánh giá mức độ hài lòng và tỷ lệ quay lại |
| **11. Phân tích Churn & Đánh giá PMF**| I | I | **A** | C | Khảo sát Sean Ellis Test để chuẩn bị scale |
| **12. Kế hoạch Sunset & Scale sản phẩm**| **A** | I | C | I | Chuyển dịch từ Concierge MVP sang Automation |

*Ký hiệu: R - Responsible (Thực hiện chính), A - Accountable (Chịu trách nhiệm duyệt), C - Consulted (Tham vấn), I - Informed (Nhận thông tin).*

---

## 2. Quy trình Giải Quyết Xung Đột & Phối Hợp

1.  **Duyệt Thiết kế & Trải nghiệm (UX/UI)**: **Sang** chịu trách nhiệm chính về mặt mỹ thuật và trải nghiệm người dùng, nhưng bắt buộc phải tham vấn ý kiến kỹ thuật của **Hưng** để đảm bảo khả năng triển khai code nhanh.
2.  **Đảm bảo Nghiệp vụ Hải quan**: Mọi logic tính toán điểm Readiness hoặc gợi ý lộ trình xuất khẩu do **Hưng** code phải được **Oanh** rà soát và ký xác nhận chuyên môn (Sign-off) để tránh sai sót pháp lý.
3.  **Hòa vốn và Tài chính**: Mọi chi phí hạ bãi, mức định giá gói dịch vụ và ngân sách pilot do **Trúc** phê duyệt để đảm bảo unit economics thực tế (hòa vốn ở mức 7-8 khách hàng trả phí).
