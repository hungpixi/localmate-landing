# Quy chuẩn Kiến trúc: Nhúng CSDL Pháp lý & Biểu thuế Xuất nhập khẩu Local-First

Tài liệu quy định chiến lược **Chuẩn hóa Nguồn Dữ liệu Pháp lý (Legal Data Standardization)** và **Nhúng CSDL Biểu thuế Local-First** cho toàn bộ dự án ExportMate.

---

## 1. Nguyên tắc Cốt lõi: Local-First Master Database

Để đảm bảo hệ thống phản hồi siêu tốc (<5ms), hoạt động 24/7 không bị gián đoạn và chính xác 100% về chuyên môn pháp lý, ExportMate áp dụng chiến lược **Local-First Database**:

```
 ┌─────────────────────────────────────────────────────────────────────────────┐
 │                MASTER LOCAL LEGAL DATABASE (SQLite / Cloudflare D1)         │
 ├──────────────────────────┬──────────────────────────┬───────────────────────┤
 │ 1. WCO & VN HS Code DB   │ 2. Official Tariff Matrix│ 3. SPS/TBT & Dossiers │
 │  - 97 Chương WCO (6 số)  │  - Thuế MFN              │  - Bộ chứng từ hải quan│
 │  - Mã HS chi tiết VN (8-10)│ - Thuế EVFTA, CPTPP... │  - FDA / GACC / EUDR  │
 └──────────────────────────┴──────────────────────────┴───────────────────────┘
                                     ▲
                                     │ (Đồng bộ định kỳ & Sync Engine)
 ┌───────────────────────────────────┴─────────────────────────────────────────┐
 │             HEATH-CHECK & REALTIME LEGAL CRAWLER (SYNC ENGINE)              │
 │ - Cổng Hải quan Việt Nam (customs.gov.vn / vbpl.vn)                         │
 │ - EU Access2Markets / EUR-Lex SPARQL API (eur-lex.europa.eu)                │
 │ - US Federal Register API (federalregister.gov)                             │
 │ - GACC Customs Notice Portal (gacc.customs.gov.cn)                          │
 │ - WTO ePing SPS/TBT Notification Portal (epingalert.org)                    │
 └─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Các Bộ Dữ liệu Chuẩn hóa Nhúng trực tiếp vào Backend

All AI Agents working on ExportMate must interact with these localized datasets:

### A. CSDL Mã HS & Biểu thuế Xuất nhập khẩu (Official Tariff Matrix)
- **Nguồn:** Nghị định 26/2023/NĐ-CP của Chính phủ & Các Nghị định sửa đổi, bổ sung.
- **Cấu trúc nhúng:**
  - `hsCode` (6 - 10 chữ số)
  - `productName` (Tên tiếng Việt & tiếng Anh thương mại)
  - `mfnTariff` (Mức thuế xuất/nhập khẩu MFN)
  - `ftaTariffs` (Mức thuế ưu đãi theo EVFTA, CPTPP, ACFTA, VJEPA, RCEP)
  - `exportTax` (Thuế xuất khẩu Việt Nam quy định)

### B. CSDL Hàng rào Kỹ thuật & Chứng từ Hải quan Bắt buộc (SPS/TBT & Dossiers)
- **Nguồn:** Quy định Hải quan & Bộ Ngành (Bộ NN&PTNT, Bộ Công Thương, EU Commission, FDA, GACC).
- **Cấu trúc nhúng:**
  - `mandatoryDocs`: Danh mục chứng từ hải quan bắt buộc (Phytosanitary, Health Cert, C/O Form EUR.1/E/VJ, Bill of Lading, Commercial Invoice).
  - `technicalBarriers`: Hàng rào SPS/TBT (Dư lượng Ochratoxin A, MRLs, Aflatoxin, EUDR GPS Polygons, Formaldehyde CARB P2, E-Mark).
  - `requiredCertificates`: Bằng chứng chứng nhận được chấp nhận (ISO 22000, HACCP, BRCGS, FDA 510k, OEKO-TEX).

### C. CSDL Cảnh báo Nghị định & Văn bản Pháp luật (Decree & Circular Vault)
- **Nguồn:** Cổng Công báo haitquan.gov.vn/customs.gov.vn, VBPL, EUR-Lex, US Federal Register.
- **Cấu trúc nhúng:**
  - `decreeNo`: Số hiệu văn bản (Nghị định / Thông tư / Lệnh GACC / Regulation EU).
  - `issuingBody`: Cơ quan ban hành.
  - `effectiveDate`: Ngày có hiệu lực.
  - `impactLevel`: `CRITICAL` (Blocker P0), `WARNING` (P1), `INFO` (P2).
  - `sourceUrl`: Link tải file PDF/HTML công báo chính thức 100%.

---

## 3. Quy chuẩn Bắt buộc cho AI Agent khi Phát triển Nghiệp vụ mới

1. **Không phụ thuộc API bên thứ 3 gián đoạn:** Mọi tra cứu mã HS, biểu thuế và điều kiện xuất khẩu phải ưu tiên đọc từ Local SQLite/D1 Database (`server/data/` hoặc Prisma DB).
2. **Chuẩn hóa Nguồn Pháp lý (Zero Fake Domains):** Tuyệt đối không hardcode link ảo hay typo tên miền. Chỉ sử dụng tên miền chính phủ thật (`customs.gov.vn`, `mard.gov.vn`, `eur-lex.europa.eu`, `federalregister.gov`, `gacc.customs.gov.cn`).
3. **Đồng bộ Tự động (Auto Sync Engine):** Khi người dùng bấm nút *"🔄 Cập nhật Quy chuẩn Mới nhất"*, hệ thống sẽ kích hoạt `syncRealtimeRegulatoryFeeds()` để tải bản snapshot mới nhất từ các cổng công báo và cập nhật lại CSDL Local.
