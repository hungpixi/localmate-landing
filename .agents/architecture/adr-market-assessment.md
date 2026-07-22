# ARCHITECTURE DECISION RECORD (ADR-005)
## Quyết định Kiến trúc: Loại bỏ Endpoint `/api/readiness/scores` và Tái thiết kế Market Assessment

**Trạng thái:** ACCEPTED  
**Ngày:** 2026-07-22  
**Quyết định bởi:** Hội đồng Kiến trúc ExportMate  

---

## 1. BỐI CẢNH (CONTEXT)
Trước đây, hệ thống tồn tại endpoint `/api/readiness/scores` trả về mảng dữ liệu tĩnh gồm điểm phần trăm sẵn sàng cho 3 thị trường: EU (85%), Mỹ (78%), Nhật Bản (92%). Endpoint này có các hạn chế nghiêm trọng:
- Trộn lẫn dữ liệu Năng lực Doanh nghiệp (Readiness) với Yêu cầu Thị trường (Market Compliance).
- Không có căn cứ tính toán, không có công thức, không có phiên bản luật và nguồn dữ liệu kiểm chứng.
- Dễ gây hiểu nhầm pháp lý cho người dùng khi tưởng rằng hệ thống đã xác minh 85% tuân thủ EU.

## 2. QUYẾT ĐỊNH KÍCH THƯỚC (DECISION)
1. **Loại bỏ vĩnh viễn endpoint `/api/readiness/scores`** khỏi hệ thống API Backend.
2. **Loại bỏ component `MarketReadinessGauge`** khỏi Dashboard Readiness chung.
3. **Tách biệt luồng Đánh giá Thị trường (Market Assessment)** thành Resource RESTful riêng biệt:
   - `GET /api/markets`: Lấy danh sách thị trường và siêu dữ liệu.
   - `GET /api/markets/:marketId/requirements`: Lấy luật pháp, SPS/TBT và biểu thuế.
   - `GET /api/projects/:projectId/market-assessments`: Lấy kết quả đánh giá khoảng thiếu cho một dự án cụ thể.
   - `POST /api/projects/:projectId/market-assessments`: Kích hoạt đánh giá khoảng thiếu tuân thủ cho dự án xuất khẩu.

## 3. HỆ QUẢ (CONSEQUENCES)
- **Tích cực:**
  - Bảo đảm tính chính xác nghiệp vụ xuất khẩu, tuân thủ nguyên tắc Không Overclaim và An toàn dữ liệu.
  - Phân định rõ ràng trách nhiệm giữa Frontend và Backend.
  - Dữ liệu đánh giá có nguồn gốc (`sourceUrl`), phiên bản quy định (`ruleVersion`) và độ tin cậy (`confidenceLevel`).
- **Thách thức:**
  - Cần cập nhật các trang UI đang gọi endpoint cũ để chuyển sang API mới.
