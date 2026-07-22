# BUSINESS_ANALYSIS_BEFORE_UI.md — Phân tích Nghiệp vụ Trước khi Thiết kế Sản phẩm

Tài liệu quy định tư duy cốt lõi bắt buộc cho mọi AI Agent & Kỹ sư khi xây dựng bất kỳ tính năng nào trên ExportMate.

> **QUY TẮC GỐC:** Không bao giờ thiết kế giao diện (UI/UX) trước khi chốt 9 yếu tố nghiệp vụ của bộ xương sản phẩm.
> **"UI là phần nhìn thấy; nghiệp vụ mới là bộ xương của sản phẩm."**

---

## 1. Tư duy Nghiệp vụ vs Tư duy UI Thuần

### ❌ Tư duy SAI (UI-First Trap):
> *"Tạo một trang readiness có form, progress bar và score."*
> *"Tạo một trang workspace có ô nhập tên công ty và nút lưu."*

### ✅ Tư duy ĐÚNG (Domain-First Strategy):
> *"Khi doanh nghiệp muốn chào một sản phẩm cà phê vào thị trường EU, hệ thống cần kiểm tra dữ liệu nào từ Workspace SSOT, điều kiện nào bắt buộc (EUDR GPS / Ochratoxin A), ai xác minh bằng chứng, trường hợp nào bị chặn (BLOCKED) và công việc nào được tự động sinh ra sau khi đánh giá?"*

Sau khi trả lời xong câu hỏi đó, **giao diện gần như tự hiện ra**.

---

## 2. Bảng Phân tách Khái niệm Nghiệp vụ trong ExportMate

| Khái niệm UI | Khái niệm Nghiệp vụ Cốt lõi (System Domain Concept) |
|---|---|
| `Workspace` | **Ngữ cảnh Nghiệp vụ (Business Context) & Nguồn Dữ liệu Gốc (Single Source of Truth - SSOT)** |
| `Readiness Assessment` | **Quy trình Đánh giá & Rà soát Tuân thủ (Compliance Assessment Process)** |
| `Evidence File` | **Bằng chứng Xác minh Pháp lý (Verified Legal Evidence Tier 1/2/3)** |
| `Score Number` | **Kết quả Tính toán Chỉ số Trưởng thành (Calculated Maturity Score)** |
| `Action Plan Tasks` | **Đầu ra Nghiệp vụ & Nhiệm vụ Phân công Tự động (Actionable Business Output)** |
| `Ready / Conditional / Blocked` | **Quyết định Nghiệp vụ & Điều khiển Khóa Tính năng (Business Decision & Feature Locks Matrix)** |

---

## 3. Quy trình 9 Bước Bắt buộc Trước khi Viết Code / Vẽ UI

Mọi tính năng mới bắt buộc phải trải qua 9 câu hỏi phân tích:

```text
1. Actor          ──► Ai thực hiện thao tác? Quyền hạn (RBAC) là gì?
2. Business Goal  ──► Mục tiêu nghiệp vụ thực tế là gì?
3. Trigger        ──► Sự kiện nào kích hoạt luồng này?
4. Required Data  ──► Cần những dữ liệu gốc nào từ Workspace SSOT?
5. Business Rules ──► Quy tắc kiểm tra (Validation Rules & P0 Blockers) là gì?
6. State Machine  ──► Trạng thái chuyển đổi (State Transitions) như thế nào?
7. Exceptions     ──► Trường hợp ngoại lệ / rủi ro xử lý ra sao?
8. Output         ──► Dữ liệu đầu ra là gì?
9. Next Action    ──► Kích hoạt hành động nghiệp vụ nào tiếp theo (RFQ, Task, Gate Lock)?
```

---

## 4. Các Khái niệm Hệ thống Liên quan

Mọi thiết kế sản phẩm trên ExportMate phải được kiểm soát bởi các khái niệm:
- **Domain model:** Mô hình miền nghiệp vụ
- **Business process:** Quy trình vận hành thực tế
- **Business rule:** Quy tắc điều kiện
- **State machine:** Máy trạng thái chuyển đổi
- **Actor & permission:** Nhân sự & Phân quyền
- **Input / Output:** Đầu vào & Đầu ra
- **Exception flow:** Luồng xử lý sự cố
- **Data ownership:** Quyền sở hữu dữ liệu
- **Source of truth:** Nguồn dữ liệu gốc duy nhất
