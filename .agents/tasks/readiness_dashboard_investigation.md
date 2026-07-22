# BÁO CÁO ĐIỀU TRA LỖI READINESS DASHBOARD & KẾ HOẠCH TỐI ƯU
**Ngày:** 2026-07-22
**Mã lỗi:** `ERR_READINESS_DASHBOARD_FETCH_FAILED`
**URL bị ảnh hưởng:** `http://localhost:5173/dashboard/readiness`

---

## 1. TỔNG QUAN HIỆN TRẠNG & NGUYÊN NHÂN GỐC RỄ (ROOT CAUSE)

### 🔴 Triệu chứng
Người dùng truy cập `http://localhost:5173/dashboard/readiness` gặp lỗi:
> **"Lỗi khi tải dữ liệu Readiness Dashboard."**
> Có nút "Thử lại" nhưng nhấn lại vẫn báo lỗi tương tự.

---

### 🔍 Kết quả điều tra Codebase (Deep Codebase Analysis)

1. **Frontend Call (`src/pages/Readiness/ReadinessPage.tsx`)**:
   - Màn hình `ReadinessPage` gọi TanStack `useQuery`:
     ```ts
     const { data: readinessData, isLoading: loadingReadiness, error, refetch } = useQuery({
       queryKey: ['readinessDashboard', selectedHsCode, selectedMarket],
       queryFn: async () => {
         const res = await apiClient.get(`/api/readiness/dashboard?market=${selectedMarket}&hsCode=${selectedHsCode}`);
         return res.data;
       }
     });
     ```
   - Khi `error` có giá trị (HTTP non-2xx response), component lập tức trả về `ErrorState`:
     ```tsx
     if (error) {
       return (
         <PageContainer>
           <ErrorState description={"Lỗi khi tải dữ liệu Readiness Dashboard."} onRetry={() => refetch()} />
         </PageContainer>
       );
     }
     ```

2. **Backend Route Missing (`server/routes/readiness.ts`)**:
   - Backend Express app (`server/index.ts`) đăng ký router:
     ```ts
     app.use('/api/readiness', readinessRouter);
     ```
   - Trong `server/routes/readiness.ts`, danh sách các API route hiện có bao gồm:
     - `GET /hs-products`
     - `GET /hs-rules`
     - `GET /scores`
     - `GET /:projectId/readiness`
     - `GET /questions`
     - `GET /history`
     - `POST /extract-document`
     - `POST /connect-partner`
     - `POST /submit`
   - ❌ **THIẾU ROUTE `GET /dashboard`** (hoặc `GET /api/readiness/dashboard`).
   - Do đó, request tới `/api/readiness/dashboard` bị Express trả về **404 Not Found**.

3. **Vite Proxy & Network Setup (`vite.config.ts`)**:
   - Proxy trong Vite hoạt động bình thường: `/api` -> `http://localhost:4000`.
   - Lỗi kết nối không phải do cấu hình proxy mà do Backend thiếu endpoint phản hồi data.

---

## 2. BỘ XƯƠNG NGHIỆP VỤ & DATA CONTRACT (BUSINESS & SSOT MATRICES)

Căn cứ quy chuẩn Decision Engine SSOT tại ExportMate (`.agents/rules/domain-decision-engine-ssot.md`), dữ liệu Readiness Dashboard phải phản ánh đúng 3 thành tố:
1. **Declared Score (Chỉ số Tự khai báo)**: Tính từ khảo sát / câu hỏi năng lực.
2. **Verified Score (Chỉ số Thực tế được kiểm định)**: Tính từ chứng thư ISO, HACCP, tọa độ GPS vùng trồng, spec sheet.
3. **Evidence Coverage (Độ phủ Chứng từ)**: Tỷ lệ chứng từ đã nộp trên tổng chứng từ bắt buộc cho thị trường mục tiêu (EU/US/CHINA/JAPAN).

### Frontend Contract Requirements (`src/features/readiness/components/ReadinessDashboard.tsx`)
```ts
interface GapDetail {
  score: number;
  maxScore: number;
  findings: string[];
  missingEvidence: string[];
  remediationRoute?: string;
  actionLabel?: string;
}

interface ReadinessData {
  overallScore: number;
  verifiedScore?: number;
  evidenceCoverage?: number;
  gaps: Record<string, GapDetail>;
  missingEvidence: string[];
  riskFlags: string[];
  blockers?: string[];
  warnings?: string[];
}
```

---

## 3. PHƯƠNG ÁN KHẮC PHỤC CHI TIẾT (IMPLEMENTATION PLAN)

### 🛠 Bước 1: Thêm endpoint `GET /api/readiness/dashboard` vào `server/routes/readiness.ts`
Endpoint này sẽ:
- Nhận query parameters: `market` (EU, US, CHINA, JAPAN), `hsCode` (ví dụ `0901.11.10`).
- Lấy thông tin Workspace của User hiện tại qua `resolveUserContext`.
- Chạy `evaluateReadinessDecision(workspace.id, workspace.name, hsCode, market)` để tính toán chỉ số SSOT chuẩn từ `readinessEngine`.
- Trả về đối tượng JSON khớp 100% với `ReadinessData` mà Frontend yêu cầu.

### 🛠 Bước 2: Tối ưu hoá Fallback & Resilience cho Frontend (`ReadinessPage.tsx`)
- Thêm cơ chế fallback data hợp lý nếu backend đang trong quá trình khởi động hoặc không tìm thấy thông tin chi tiết.
- Không để trang bị trắng hoặc kẹt ở Error State mà cung cấp nút Retry và thông tin rõ ràng.

### 🛠 Bước 3: Kiểm định & Verification
- Kiểm tra lại các file code.
- Chạy `npm run typecheck` để đảm bảo type-safety.
- Chạy `npm run build` xác nhận không có breaking changes.

---

## 4. KẾT LUẬN & HƯỚNG DẪN THỰC THI

File này đã được lưu vào `.agents/tasks/readiness_dashboard_investigation.md` để làm tài liệu chuẩn SSOT cho hệ thống.
