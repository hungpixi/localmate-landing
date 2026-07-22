# ExportMate Investment Room Architecture (`/invest`)

> **PDR Phase 0.5**: Phòng Thông tin Đầu tư (Investment Room) dành cho Ban Giám khảo, Nhà Đầu tư, Mentor & Đối tác

---

## 1. Cấu trúc Phòng Đầu tư (Investment Room Structure)

Phòng Đầu tư là cổng thông tin độc lập phục vụ Ban giám khảo, Quỹ đầu tư và Đối tác chiến lược. Route chính tại `/invest` phân chia thành **3 Bộ Hồ sơ Chuyên sâu**:

```text
               exportmate.vn/invest
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
   /invest/people  /invest/product  /invest/finance
  [ Hồ sơ Con người ] [ Hồ sơ Sản phẩm ] [ Hồ sơ Tài chính ]
```

---

## 2. Chi tiết 3 Bộ Hồ sơ Chuyên sâu

### 👥 1. Hồ sơ Con người (`/invest/people`)
- **Tầm nhìn Founder & Đội ngũ**: Năng lực công nghệ, kinh nghiệm xuất nhập khẩu thực tế.
- **Hệ sinh thái Đồng hành**: Nguồn lực cố vấn từ SIHUB, Đối tác Chứng nhận (SGS, Quatest), Đối tác Logistics.
- **Kế hoạch Phát triển Tổ chức**: Lộ trình mở rộng đội ngũ kỹ thuật & kinh doanh trong 12-24 tháng.

### 📦 2. Hồ sơ Sản phẩm & Công nghệ (`/invest/product`)
- **Vấn đề Thị trường & Customer Pain Points**: Hồ sơ rải rác, rủi ro chứng từ xuất khẩu.
- **Kiến trúc Sản phẩm (Deterministic Engine & Legal Local-First)**:
  - CSDL 97 Chương WCO + Biểu thuế FTA nhúng Local Backend.
  - Decision Engine tính toán Readiness Score 0ms, 0 AI hallucination.
  - Supplier Site Builder 10 Presets 15 phút.
- **Roadmap Sản phẩm**: 7 ngày, 30 ngày và Lộ trình tiến sang Export Operating System.

### 💰 3. Hồ sơ Tài chính & Mô hình Doanh thu (`/invest/finance`)
- **Dòng Doanh thu Multi-Tier**:
  - Implementation Fee (Phí khởi tạo hồ sơ doanh nghiệp).
  - Monthly/Annual Subscription (Phí duy trì Workspace & Supplier Site).
  - Service Coordination Fee (Phí kết nối Dịch vụ Chứng chỉ, Kiểm định, Logistics).
- **Unit Economics & Projections**: Giả định chi phí CAC, Runway và Nhu cầu huy động vốn.

---

## 3. Liên kết Trải nghiệm 2 Chiều
- Trang `/invest` có nút bấm CTA nổi bật: **`[🚀 Trải nghiệm Sản phẩm Thực tế]`** dẫn về `/demo`.
- Màn hình Dashboard dành cho Investor & Judge có CTA phụ: **`[📊 Xem Hồ sơ Dự án]`** dẫn tới `/invest`.
