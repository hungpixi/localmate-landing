# POLICY SPECIFICATION: API ERROR HANDLING & DEMO DATA ISOLATION

**Phiên bản:** 1.0.0  
**Tác giả:** Hội đồng Kiến trúc ExportMate  

---

## I. NGUYÊN TẮC XỬ LÝ LỖI HỆ THỐNG (API ERROR-STATE POLICY)

### 1. Cấm Tuyệt đối (Strict Anti-Patterns)
- ❌ **CẤM** sử dụng `try/catch` ở Frontend để trả về mảng dữ liệu tĩnh (Static Fallback Array) làm người dùng lầm tưởng đó là kết quả thật.
- ❌ **CẤM** hiển thị thông báo lỗi kỹ thuật thô (Stack Trace, 500 Internal Error code, JSON response error) trên giao diện người dùng.
- ❌ **CẤM** gộp tất cả các lỗi vào một banner đỏ chung chung.

### 2. Chuẩn hóa Trạng thái Kết quả Truy vấn (`QueryState<T>`)
Mọi hook truy vấn API trong ứng dụng phải trả về cấu trúc phân định trạng thái rõ ràng:

```typescript
export type QueryState<T> =
  | { kind: "loading" }
  | { kind: "success"; data: T; lastVerifiedAt: string }
  | { kind: "empty"; reason: string; actionRoute?: string }
  | { kind: "insufficient_data"; missingFields: string[]; actionRoute?: string }
  | { kind: "unavailable"; message: string; retryable: boolean }
  | { kind: "demo"; data: T; demoNotice: string };
```

---

## II. CHÍNH SÁCH DỮ LIỆU DEMO (DEMO DATA ISOLATION POLICY)

### 1. Phân lập Tuyệt đối (Absolute Isolation)
- Dữ liệu demo chỉ được phép tồn tại trong các file `demoFixtures.ts` hoặc database seed chuyên dụng.
- Dữ liệu demo chỉ được kích hoạt khi `DEMO_MODE=true` hoặc qua toggle Pitch Mode.

### 2. Nhãn Hiển thị Bắt buộc (Mandatory Demo UI Label)
- Mọi card, bảng hoặc đồ thị hiển thị dữ liệu demo phải có Badge nổi bật:
  `[🧪 Dữ liệu minh họa - Không dùng để ra quyết định pháp lý]`

### 3. Không Lưu chéo (No Cross-Contamination)
- Dữ liệu demo không bao giờ được ghi đè vào bảng production của User.
- Thao tác Reset Demo phải làm sạch 100% dữ liệu demo mà không ảnh hưởng tới dữ liệu thật của người dùng.
