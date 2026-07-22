# ExportMate Customer Experience & Micro-Interaction Rules (Quy chuẩn Trải nghiệm Khách hàng & Tương tác Nhỏ)

Tài liệu quy định các chi tiết vi mô (Micro-Interactions) và tiêu chuẩn Trải nghiệm Khách hàng (CX) bắt buộc khi xây dựng giao diện ứng dụng trên ExportMate.

---

## 1. Tự động lướt & Tự động chuyển bước (Typeform-Style Auto-Advance UX)
* **Tự động lướt (Auto-Scroll):** Khi người dùng nhấp chọn đáp án ở câu hỏi $N$, giao diện phải tự động cuộn nhẹ nhàng đến câu hỏi $N+1$ (`scrollIntoView({ behavior: 'smooth', block: 'center' })`).
* **Tự động chuyển bước (Auto-Advance):** Khi tất cả đáp án trong phần hiện tại đã hoàn tất và đạt đủ điều kiện, hệ thống tự động chuyển sang Bước tiếp theo sau khoảng `350ms` mà không bắt người dùng phải di chuột xuống đáy trang bấm nút "Tiếp theo".
* **Manual Override:** Luôn giữ nút điều hướng thủ công ở cuối trang để người dùng có thể chủ động bấm quay lại nếu muốn sửa đáp án.

---

## 2. Validation Thông minh (Không chặn người dùng vô lý)
* **Quy tắc:** Kiểm tra điều kiện nộp file/báo cáo phải dựa trên đáp án thực tế.
* **Cụ thể:** Nếu người dùng chọn *"Chưa có chứng chỉ / Chưa bắt đầu"*, hệ thống **tuyệt đối không đòi nộp file minh chứng**. Phải hiển thị ghi chú hướng dẫn êm dịu thay vì bật thông báo lỗi chặn đứng hành trình của người dùng.

---

## 3. Không trùng lặp Nút bấm & Trạng thái gây xung đột (No Conflicting UI States)
* Badge trạng thái và Nút hành động phải đồng nhất 100%:
  * Khi chứng từ **ĐÃ HOÀN THÀNH (`isDone`)**: Hiển thị duy nhất nút **`👁️ Xem File`** hoặc **`🔄 Cập nhật`**. Cấm hiển thị cùng lúc badge `✓ ĐÃ TẢI LÊN` và nút `+ Tải lên`.
  * Khi chứng từ **CHƯA NỘP**: Mới hiển thị nút **`+ Tải lên`**.

---

## 4. Ngôn ngữ SME Việt Nam & Lộ trình 4 Bước Trưởng thành (SME Maturity Roadmap)
* Thay vì dùng từ ngữ kỹ thuật/tiếng Anh phức tạp (*Pre-ECUS5, Logistics RFP, Cross-audit AI*), hãy sử dụng Lộ trình 4 Bước chuẩn hóa xuất khẩu gần gũi:
  1. **Bước 1: CHUẨN HÓA (Standardize)** — Gom đủ & chuẩn mẫu biểu giấy tờ Excel.
  2. **Bước 2: SỐ HÓA (Digitize)** — Lưu trữ tập trung kho dữ liệu Cloud.
  3. **Bước 3: TỰ ĐỘNG HÓA (Automate)** — AI tự động đối soát rủi ro Hải quan.
  4. **Bước 4: CÁ NHÂN HÓA (Personalize)** — Tạo Supplier Page B2B & phát hành eBL.

---

## 5. Cấm xén bớt chữ cưỡng ép (`truncate`) trên tiêu đề quan trọng
* Không dùng thuộc tính `truncate` trên các tiêu đề, thẻ giai đoạn hoặc trạng thái xuất khẩu khiến chữ bị biến thành `"..."` chắp vá.
* Sử dụng `min-w-[195px]`, `whitespace-nowrap inline-block` hoặc cho phép rớt dòng tự nhiên để người dùng đọc được 100% nội dung.
