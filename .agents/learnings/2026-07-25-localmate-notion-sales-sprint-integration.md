# Learning: LocalMate Notion API Sales Sprint Integration & 3P Compensation Model

- **Ngày ghi nhận**: 2026-07-25
- **Dự án**: LocalMate VN (`localmate-landing`)
- **Tác giả**: Antigravity AI Pair Programmer

---

## 1. Bối Cảnh & Mục Tiêu

Chuyển đổi toàn bộ kế hoạch làm việc 14 ngày (26/07 – 08/08) giữa Hưng & Tố Anh từ lý thuyết sang **Chiến lược Thực chiến Sales 100% (Day 1 Outreach & Revenue Focus)**.

Đồng bộ trực tiếp lên cơ sở dữ liệu Notion Database (`3a8c661d-848a-80d2-9db4-e34bdf2336d9`) qua REST API, hiển thị tối ưu trên cả 3 góc nhìn: **Table View**, **Board / Kanban View** và **Timeline / Gantt View**.

---

## 2. Kỹ Thuật Tích Hợp Notion API Quan Trọng

### 💡 Formatting Date Range Cho Đồ Thị Gantt / Timeline:
Khi tương tác với Notion API, để đồ thị Timeline hiển thị chính xác dải thời gian liên tục (Gantt bars), thuộc tính `Date` bắt buộc phải chứa dải thời gian bao gồm cả `start` và `end`:
```json
{
  "properties": {
    "Start date": {
      "date": {
        "start": "2026-07-26",
        "end": "2026-07-28"
      }
    }
  }
}
```
Nếu chỉ truyền `start` mà không có `end`, view Timeline trên Notion sẽ không tự động vẽ dải tiến độ kéo dài.

---

## 3. Mô Hình Lương 3P Cho Gói 2.900.000đ

1. **P1 (Position & Infrastructure - Hưng lo 100%)**:
   - Hưng bao trọn 100% chi phí cứng (Domain .com/.vn, Hosting server, Tool, Proxy và hỗ trợ tài chính khẩn cấp cho Tố Anh).
2. **P2 (Person & Assets - Tài sản lâu dài)**:
   - Tích lũy đền đáp công sức hoàn thiện Script, Playbook, Checklist 7 chạm vào cổ phần & vai trò quản lý dài hạn.
3. **P3 (Performance - Hoa hồng deal 2.9M)**:
   - **Deal 1 ➔ Deal 4**: Tố Anh nhận **1.200.000đ / deal** chốt thành công.
   - **Deal 5+ trở đi**: Thưởng lũy tiến nâng lên **1.400.000đ / deal** cho Tố Anh.
   - Hưng giữ lại ~1.5M/deal để làm web, biên tập **10 bài viết dịch vụ** và bảo trì 12 tháng.

---

## 4. Chiến Lược 7 Lần Chạm Chân Thành (7-Touches Sales Pipeline)

- **Touch 1**: Khen ngợi/góp ý chân thành bài viết/Maps tiệm họ.
- **Touch 2**: Gửi link Live Demo mượt đúng tên tiệm khách (dựng 15p).
- **Touch 3**: Tặng 1 mẹo tối ưu vị trí Google Maps miễn phí.
- **Touch 4**: Gửi video short / voice note 30s tiệm cùng ngành đã làm đẹp.
- **Touch 5**: Zalo Voice Call hỏi thăm cảm nhận, trao đổi nhu cầu thật.
- **Touch 6**: Offer ưu đãi 2.9M Zero-Risk (Không cọc - Nghiệm thu mượt mới thanh toán).
- **Touch 7**: Thu 5 món Brief, bàn giao trong 48h & quyết toán hoa hồng P3 cho Tố Anh.
