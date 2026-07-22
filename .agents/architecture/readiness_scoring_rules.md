# PHẦN D: CÔNG THỨC CHẤM ĐIỂM & QUY TẮC BLOCKER (3-LAYER SCORING MODEL)

**Phiên bản:** 2.0.0  
**Tác giả:** ExportMate Scoring Engine Team  

---

## I. MÔ HÌNH 3 LỚP ĐIỂM SỐ (3-LAYER SCORING ENGINE)

ExportMate tuyệt đối không sử dụng 1 con số % mơ hồ duy nhất. Mọi đánh giá phải hiển thị minh bạch 3 lớp điểm số:

```
┌────────────────────────────────────────────────────────┐
│ 1. Self-Assessed Score (Điểm Tự Khai Báo)             │
│    • Tính dựa trên câu trả lời khảo sát ban đầu        │
│    • Thể hiện nhận thức và chuẩn bị của doanh nghiệp   │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│ 2. Verified Capability Score (Điểm Bằng Chứng Dữ Liệu) │
│    • Tính dựa trên chứng từ ĐÃ ĐƯỢC XÁC MINH           │
│    • Bị trừ điểm nặng nếu thiếu chứng nhận bắt buộc    │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│ 3. Market-Specific Readiness Score (Điểm Phù Hợp)     │
│    • Điểm tương thích cho 1 Sản phẩm + 1 Thị trường   │
│    • Bị CHẶN VỀ 0% nếu vướng lỗi Blocker P0 nghiêm trọng │
└────────────────────────────────────────────────────────┘
```

---

## II. CÔNG THỨC CHẤM ĐIỂM CHI TIẾT

### 1. Công thức Điểm Tự khai báo (`SelfAssessedScore`)
$$SelfAssessedScore = \frac{\sum (AnswerScore_i \times Weight_i)}{\sum MaxScore_i \times Weight_i} \times 100$$

### 2. Công thức Điểm Đã xác minh bằng chứng (`VerifiedScore`)
$$VerifiedScore = \frac{VerifiedEvidenceCount}{TotalRequiredEvidences} \times 100 - Penalties$$
*Trong đó:*
- `Penalties = 30%` cho mỗi chứng chỉ bắt buộc hết hạn hoặc thiếu.

### 3. Công thức Điểm Phù hợp Thị trường (`MarketReadinessScore`)
$$MarketReadinessScore = \begin{cases} 
0\% & \text{nếu tồn tại ít nhất 1 Blocker P0 (Chặn xuất khẩu)} \\
\min(VerifiedScore, MarketFit) & \text{nếu chỉ có Warning P1} \\
VerifiedScore & \text{nếu 100\% hợp lệ (READY)}
\end{cases}$$

---

## III. QUY TẮC CẬP NHẬT ĐIỂM SỐ (RECALCULATION TRIGGERS)

1. **KHÔNG TĂNG ĐIỂM TỰ ĐỘNG**: Người dùng nhấn nút hoàn thành task ở Frontend **KHÔNG LÀM TĂNG `VerifiedScore`**.
2. **ĐIỀU KIỆN TĂNG ĐIỂM**: Điểm `VerifiedScore` và `MarketReadinessScore` chỉ được phép tăng khi:
   - File chứng từ được tải lên Kho Bằng chứng.
   - Hệ thống tự động xác minh OCR/Metadata thành công hoặc Chuyên gia kiểm định duyệt (Trạng thái chuyển sang `VERIFIED`).
3. **GIẢM ĐIỂM TỰ ĐỘNG**:
   - Khi chứng chỉ chạm ngưỡng hết hạn (`diffDays <= 0`), điểm số tự động bị khấu trừ.
