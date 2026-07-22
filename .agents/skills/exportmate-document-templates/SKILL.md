---
name: exportmate-document-templates
description: "Kỹ nghệ thiết kế mẫu tài liệu DOCX xuất khẩu chuẩn pháp lý, tuân thủ UCP 600, ISPM 15, ISO 6346 và giảm thiểu rủi ro giả mạo tài liệu công (Bộ Luật Hình Sự Điều 341)."
---

# Kỹ năng: Kỹ nghệ Thiết kế Mẫu tài liệu XNK Chuẩn Pháp lý (ExportMate)

Kỹ năng này đúc kết toàn bộ tri thức thực tế về việc thiết kế, toán học hóa và pháp lý hóa 9 mẫu chứng từ xuất nhập khẩu nông sản song ngữ bằng thư viện `docx` trong môi trường NodeJS.

---

## ⚖️ 1. Quy tắc Thẩm mỹ & Nhận diện Thương hiệu (Watermark)
*   **Không dùng nhãn "AI Draft"**: Tuyệt đối không in các nhãn thô sơ như *"AI-generated"*, *"Bản nháp sinh bởi AI"* ở chân trang tài liệu vì sẽ làm mất đi giá trị pháp lý khi xuất trình hải quan/ngân hàng.
*   **Watermark Chuẩn hệ thống**: Sử dụng dòng chữ in chìm màu xám nhạt ở góc dưới bên phải chân trang để đánh dấu xuất xứ hệ thống một cách tinh tế:
    ```typescript
    "ExportMate Verified Document Standard (EM-VDS-2026)"
    ```

---

## 🔠 2. Quy tắc Song ngữ Anh - Việt (Bilingual Trade Framework)
Các chứng từ lưu thông quốc tế có xuất xứ Việt Nam (như Commercial Invoice, Packing List, C/O Form B) bắt buộc phải sử dụng song ngữ chuẩn xác:
*   **Tiêu đề lớn**: `COMMERCIAL INVOICE / HÓA ĐƠN THƯƠNG MẠI`, `PACKING LIST / PHIẾU ĐÓNG GÓI HÀNG HÓA`.
*   **Thông tin thuế**: Bắt buộc phải có `Tax Code / Mã số thuế` của bên xuất khẩu trong letterhead.
*   **Các nhãn dữ liệu (Labels)**:
    - *Người nhập khẩu*: `For Account and Risk of / Người nhập khẩu`
    - *Mặt hàng*: `Commodity / Mặt hàng`
    - *Nước xuất xứ*: `Country of origin / Nước xuất xứ` (Luôn mặc định `VIETNAM`)
    - *Số Hợp đồng*: `Contract No. / Số Hợp đồng`
    - *Trọng lượng cả bì*: `Gross Weight / Trọng lượng cả bì`
    - *Số Container/Chì*: `Containers / Seals No. / Số Cont/Chì`
    - *Số Vận đơn*: `B/L No. / Số Vận đơn`
    - *Cảng bốc/Cảng dỡ*: `Port of Loading / Cảng bốc hàng` | `Port of Discharge / Cảng dỡ hàng`
    - *Điều kiện giao hàng*: `Delivery terms / Điều kiện giao hàng`

---

## 🏦 3. Tuân thủ UCP 600 trong Giao dịch Ngân hàng (L/C)
Để tránh rủi ro ngân hàng từ chối thanh toán tín dụng thư (L/C) do bất đồng chứng từ (discrepancy):
*   **Tên chứng từ chất lượng**: Giấy chứng nhận chất lượng bắt buộc phải có từ **"WEIGHT"** trong tiêu đề nếu có liệt kê trọng lượng:
    `"CERTIFICATE OF QUALITY, QUANTITY AND WEIGHT"` (thay vì chỉ ghi *"Quality and Quantity Certificate"*).
*   **Đồng bộ số liệu**: Tất cả chỉ số Net Weight, Gross Weight, Số bao phải khớp tuyệt đối giữa Hóa đơn thương mại, Packing List, Vận đơn và các Chứng thư giám định.

---

## 🚨 4. Rủi ro Giả mạo Tài liệu Công (Điều 341 BLHS)
Khi thiết kế các chứng từ kiểm dịch, y tế có yếu tố cơ quan quản lý nhà nước cấp (như Phytosanitary Certificate):
*   **Tuyệt đối không làm giả biểu tượng/emblem** hoặc ghi tiêu đề khẳng định đây là chứng thư do Bộ cấp thực tế.
*   **Thiết lập dưới dạng Đơn nháp (Application Draft)**:
    - Tiêu đề bắt buộc phải ghi rõ: `"ĐƠN ĐĂNG KÝ KIỂM DỊCH THỰC VẬT (BẢN NHÁP DRAFT) / PHYTOSANITARY CERTIFICATE APPLICATION DRAFT"`.
*   **Ký duyệt**: Vị trí ký tên tại Ô 19 không được ghi cấp bậc *"DIRECTOR"* (Giám đốc Cục) mà phải chuyển thành `"AUTHORIZED OFFICER / CÁN BỘ KIỂM DỊCH UỶ QUYỀN"`.

---

## 🧮 5. Toán học hóa Dữ liệu (Dynamic Calculations)
Tuyệt đối không sử dụng số liệu cứng (hardcoded placeholders) cho trọng lượng và quy cách hàng hóa nông sản (cà phê, trà, gạo...). Hệ thống phải tự động tính toán động:
*   **Hàm chuẩn hóa số liệu**:
    ```typescript
    const parseNum = (val: any): number => {
      if (typeof val === 'number') return val;
      if (!val) return 0;
      const cleaned = String(val).replace(/,/g, '').replace(/[^0-9.]/g, '');
      return parseFloat(cleaned) || 0;
    };
    ```
*   **Công thức quy đổi tự động**:
    - Trọng lượng vỏ bao (Tare weight) chuẩn cho bao giấy/bao PP: `0.65 kg`.
    - Trọng lượng cả bì mỗi bao: `grossWeightPerBag = netWeightPerBag + 0.65`.
    - Tổng trọng lượng cả bì: `totalGrossWeight = totalNetWeight + (totalBags * 0.65)`.
    - Phải định dạng chuỗi số dạng Mỹ: `.toLocaleString('en-US', { minimumFractionDigits: 2 })`.

---

## 🌾 6. Tiêu chuẩn Khử trùng ISPM 15 & IPPC Stamp
Hải quan các nước Châu Âu, Mỹ kiểm soát pallet gỗ vô cùng ngặt nghèo. Chứng thư khử trùng phải thể hiện:
*   **Cam kết ISPM 15**:
    `"We hereby certify that the wood packaging materials associated with this shipment have been treated and marked in compliance with ISPM 15 standards. / Chúng tôi chứng nhận rằng vật liệu đóng gói bằng gỗ trong lô hàng này đã được xử lý và đánh dấu tuân thủ theo tiêu chuẩn quốc tế ISPM 15."`
*   **Đóng dấu IPPC trực quan**: Render một bảng nhỏ mô phỏng dấu IPPC thực tế:
    ```typescript
    const ippcStamp = new Table({
      width: { size: 30, type: WidthType.PERCENTAGE },
      alignment: AlignmentType.CENTER,
      rows: [
        new TableRow({
          children: [
            c("IPPC\n🌾", { bold: true, size: 16, align: AlignmentType.CENTER, width: 30, borders: thinAll }),
            c("VN - 099\nMB / HT\nISPM 15", { bold: true, size: 14, align: AlignmentType.CENTER, width: 70, borders: thinAll }),
          ]
        })
      ]
    });
    ```

---

## 📋 7. Cấu trúc Lưới chi tiết (Grid vs Lumps)
Tránh việc ghi gộp chung chung một đoạn văn bản dài cho kết quả kiểm đếm hoặc vệ sinh container:
*   **Tallying**: Xây dựng bảng kiểm đếm thực tế phân rã từng số hiệu Container, Số hiệu Niêm phong (Seal No), Loại bao bì và Số bao cụ thể.
*   **Container Cleanliness**: Bổ sung chỉ số đo lường độ ẩm sàn gỗ (Wood Floor Moisture Content - tối đa 15%) vào bảng kết quả kiểm tra chất lượng vỏ container để đáp ứng điều khoản bảo hiểm hàng hải.

---

## 🚀 8. Xác thực và Bảo toàn Kịch bản
Sau mỗi lần chỉnh sửa mẫu chứng từ:
1.  **Chạy kiểm thử Vitest**: `npm --prefix server run test` để đảm bảo 21/21 test kiểm đối chiếu chéo và API đều đạt 100%.
2.  **Chạy sinh chứng từ thực tế**: `npx tsx benchmark/generate-docx-samples.ts` để chắc chắn tất cả mẫu tài liệu được sinh ra nguyên vẹn và kích thước file Word ổn định (> 9 KB).
3.  **Kiểm tra biên dịch**: Chạy `npx tsc -b` từ thư mục gốc để đảm bảo không xảy ra bất kỳ lỗi cú pháp TypeScript nào trong hệ thống.
