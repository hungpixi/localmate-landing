# PHẦN A: BÁO CÁO AUDIT HIỆN TRẠNG TÁI THIẾT KẾ MOODLE READINESS

**Ngày thực hiện:** 2026-07-22  
**Hội đồng Kiến trúc:** ExportMate Product Council  

---

## I. TỔNG QUAN PHÂN TÍCH HIỆN TRẠNG (CURRENT STATE AUDIT)

### 1. Sự chuyển đổi Tư duy Core Paradigm
- **Tư duy Cũ:** Dashboard điểm số + Nhiều widget kỹ thuật phân tán (Radar lớn 100% width, nhiều bảng ngang hàng không phân cấp).
- **Tư duy Mới:** **Trung tâm điều phối mức độ sẵn sàng xuất khẩu cho một sản phẩm - một thị trường cụ thể** (Actionable Coordination Center).

---

## II. BẢNG TỔNG HỢP VẤN ĐỀ VÀ PHƯƠNG ÁN XỬ LÝ (AUDIT MATRIX)

| STT | Vấn đề UI/UX & Nghiệp vụ | Nguyên nhân Gốc rễ | Tác động Người dùng | Phương án Thiết kế lại | Mức ưu tiên |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **Không có Next Action rõ ràng** | Nhiều widget ngang hàng (62%, radar, lộ trình, blocker, warning) nhưng không phân cấp ưu tiên | Người dùng lúng túng không biết bấm vào đâu trước, việc nào chặn toàn bộ | **Thêm Khối Executive Summary 65/35** với 1 Primary Action CTA duy nhất ("Khai báo tọa độ vùng trồng"). | **P0** |
| 2 | **Radar Chart quá lớn** | Radar 100% viewport chiếm gần như toàn bộ màn hình | Chiếm diện tích nhưng không giúp ra quyết định hay đưa ra CTA trực tiếp | **Thu nhỏ Radar thành Compact Radar (~280-340px)** đặt ở góc phải 35% của Khối Summary. | **P0** |
| 3 | **Trộn lẫn Điểm tự khai & Điểm đã xác minh** | Tiêu đề ghi "Năng lực & Bằng chứng" nhưng chỉ có 1 con số % mơ hồ | Người dùng không biết 62% là tự khai hay đã qua kiểm định chứng từ | **Tách 3 lớp điểm số**: Self-assessed (78), Verified (52), Market readiness cho Đức (62). | **P0** |
| 4 | **Lộ trình chưa phải công cụ làm việc** | Lộ trình ghi Tuần 12, Tuần 35 nhưng thiếu owner, deadline, output và dependency | Đóng vai trò mô tả timeline hơn là công cụ giao việc có thể click | **Chuyển thành 5-Stage Actionable Roadmap Accordion** có trạng thái phụ thuộc và CTA nộp bằng chứng. | **P1** |
| 5 | **Điểm tăng sai nguyên tắc** | Người dùng bấm hoàn thành task là điểm số tự động tăng | Không đúng nghiệp vụ xuất khẩu (phải verified evidence mới tăng điểm) | **Quy định Recalculation Trigger**: Chỉ tăng `verifiedScore` khi bằng chứng được xác minh (VERIFIED). | **P0** |

---

## III. NGUYÊN TẮC THIẾT KẾ CỐT LÕI (CORE PRINCIPLES)

1. **Action-First, Không Chart-First**: Điểm số chỉ là tín hiệu; hành động giải quyết blocker và bằng chứng mới là giá trị cốt lõi.
2. **Khái niệm 3-Layer Scoring**:
   - `Self-Assessed Score`: Điểm tự khai báo từ bộ câu hỏi.
   - `Verified Capability Score`: Điểm đã có bằng chứng xác minh (ISO scan, FDA ID, GPS plot).
   - `Market-Specific Readiness Score`: Điểm tương thích cho 1 sản phẩm + 1 thị trường cụ thể.
3. **Thứ tự Ưu tiên Hiển thị**:
   - Khối 1: Executive Summary (Layout 65% Left / 35% Right Compact Radar).
   - Khối 2: Priority Issues (Ưu tiên cần xử lý ngay).
   - Khối 3: Next Best Actions (Việc tiếp theo của bạn - 3 đến 5 việc gần nhất).
   - Khối 4: 5-Stage Actionable Roadmap (Lộ trình 5 giai đoạn).
   - Khối 5: Evidence & Verification Table (Bằng chứng và xác minh).
   - Khối 6: Detailed Analysis & Score History (Phân tích chi tiết ở khu vực thứ cấp/drawer).
