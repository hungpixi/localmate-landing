# Bài Học Kiến Trúc & Quy Chuẩn Triển Khai LocalMate Advisor (Solution Composer)

**Ngày cập nhật**: 13/08/2026

## 1. Bản Chất Sản Phẩm
- **LocalMate Advisor** là **Service Advisor + Solution Composer**, không phải chatbot CSKH hỏi đáp tự do.
- **Nhiệm vụ cốt lõi**: Chuyển bài toán thực tế của doanh nghiệp nhỏ thành **Lộ trình 3 Giai đoạn (Phase 1: Làm ngay, Phase 2: Khi ổn định, Phase 3: Tăng trưởng) + Báo giá chuẩn xác + Machine-readable Scope**.

## 2. Nguyên Tắc "Chưa Cần Làm" (Minimum Viable Recommendation)
- Nếu khách đã có website đang dùng ổn, Advisor chủ động khuyến nghị: **"Chưa cần làm lại website"** và tập trung vào `Tracking Pack (390k)` + `Google Maps (390k)`.
- Tạo dựng niềm tin tuyệt đối bằng cách không ép khách mua lại tài sản đã có.

## 3. Thuật Toán Chấm Điểm Deterministic (Deterministic Scoring Formula)
- AI không tự sinh gói hoặc giá bịa. Giá và thứ tự được tính toán 100% dựa trên Service Registry (40 dịch vụ SSOT trong `servicesCatalog.ts`).
- Công thức:
  $$Score = (ProblemMatch \times 40) + (GoalMatch \times 30) + (IndustryMatch \times 15) + (BudgetFit \times 10) + (DependencyFit \times 5)$$

## 4. Giao Diện 2 Cột Realtime Configurator
- Cột trái: Luồng 5 câu hỏi thích ứng (Adaptive Question Flow).
- Cột phải: Khung Lộ Trình 3 Giai Đoạn & Báo Giá Phase 1 cập nhật thời gian thực (Realtime Live Plan).
- Route chính: `/advisor` (nút *Tìm gói phù hợp với bạn 0đ* trên Hero & Header).
