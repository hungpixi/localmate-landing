# Quy tắc thiết kế chống tràn ngang (Horizontal Overflow) và vỡ layout khi zoom

Tài liệu này ghi nhận các nguyên tắc, kỹ thuật sửa lỗi và checklist audit code để chống vỡ layout, mất nội dung hoặc tràn viền ngang khi trình duyệt zoom (100%, 110%, 125%, 150%) hoặc chạy trên các màn hình laptop phổ thông (1366px, 1440px).

---

## 1. Nguyên nhân lớn nhất: Dùng width cố định quá nhiều

Tránh sử dụng chiều rộng cứng (width cố định) cho các thành phần chính vì dễ gây tràn viewport khi màn hình thu nhỏ hoặc zoom lên.

### Sửa bằng Grid linh hoạt

```css
.dashboard-content {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(320px, 1fr);
  gap: 24px;
  width: 100%;
  min-width: 0;
}
```

Responsive:

```css
@media (max-width: 1280px) {
  .dashboard-content {
    grid-template-columns: 1fr;
  }
}
```

*Không cố giữ layout 2 cột bằng mọi giá trên laptop nhỏ hoặc khi zoom.*

---

## 2. Thiếu `min-width: 0` trong Flex/Grid

Mặc định, các flex/grid item có `min-width: auto` khiến chúng không chịu nhỏ hơn nội dung bên trong, dẫn đến đẩy layout tràn ngang.

### Sửa:

```css
.app-main,
.page-content,
.dashboard-content,
.dashboard-card,
.table-wrapper,
.flex-child,
.grid-child {
  min-width: 0;
}
```

Ví dụ Flex layout chuẩn:

```css
.layout {
  display: flex;
  width: 100%;
}

.sidebar {
  flex: 0 0 280px;
}

.main {
  flex: 1;
  min-width: 0;
}
```

### Chống tràn chữ trong Button / Box Option Flex Container (Đặc biệt trên Mobile):
Khi sử dụng `<button className="w-full flex items-center justify-between">` bọc text dài và icon:
- **Lỗi:** Flex container mặc định không thu nhỏ `span` text bên trong (`min-width: auto`), làm chữ đè hoặc tràn ra ngoài viền card/box trên màn hình nhỏ (như iPhone 375px).
- **Khắc phục:** 
  1. Đổi `flex items-center` thành `flex items-start gap-2 min-w-0` để icon không bị lệch khi text dài wrap thành nhiều dòng.
  2. Bọc text trong `<span className="flex-1 min-w-0 break-words leading-relaxed">{text}</span>`.
  3. Thêm `shrink-0` cho Icon (`<CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />`).

---

## 3. Dùng `100vw` sai chỗ

Tránh dùng `100vw` khi layout có sidebar cố định, vì tổng chiều rộng sẽ vượt quá màn hình (`sidebar + 100vw`). Ngoài ra, `100vw` còn tính cả chiều rộng thanh cuộn scrollbar.

### Nên dùng:

```css
.main {
  flex: 1;
  width: auto;
  max-width: 100%;
  min-width: 0;
}
```

Hoặc:

```css
.main {
  width: calc(100% - 280px);
}
```

---

## 4. Responsive cho bảng (Table) nhiều cột và chống scroll ngang

Thanh cuộn ngang (horizontal scroll) xuất hiện vì tổng chiều rộng tối thiểu của các cột đang lớn hơn card bọc ngoài. Chọn chiến lược ẩn cột phụ hoặc co giãn cột:

* **Bỏ `min-width` khỏi table**: Tránh các thuộc tính như `min-width: 800px` hay `min-w-[720px]`.
* **Giảm padding ngang của ô**: Khoảng cách cột quá xa do padding lớn sẽ cộng dồn chiều rộng.
* **Cột chính co giãn, cột phụ giữ vừa nội dung**: Cột Công việc nhận toàn bộ khoảng trống còn lại, các cột phụ chỉ rộng bằng nội dung.

```css
.task-table-wrapper {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
}

.task-table {
  width: 100%;
  min-width: 0;
  border-collapse: collapse;
  table-layout: auto;
}

.task-table th {
  padding: 12px 10px;
  text-align: left;
  white-space: nowrap;
}

.task-table td {
  padding: 14px 10px;
  vertical-align: middle;
}

.task-table th:first-child,
.task-table td:first-child {
  width: auto;
  min-width: 0;
  padding-left: 20px;
}

.task-table th:not(:first-child),
.task-table td:not(:first-child) {
  width: 1%;
  white-space: nowrap;
}
```

---

## 5. Sử dụng `text-overflow: ellipsis` và Wrap text hợp lý

Tránh lạm dụng `ellipsis` quá đà làm cụt chữ. Chỉ áp dụng `nowrap` cho ngày, trạng thái, người phụ trách và nút. Tên công việc hoặc mô tả chính phải được wrap tự nhiên.

```css
.task-title-cell {
  min-width: 0;
}

.task-title-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  min-width: 0;
}

.task-title {
  min-width: 0;
  white-space: normal;
  overflow-wrap: anywhere;
  line-height: 1.35;
}
```

Hoặc giới hạn tối đa 2 dòng:

```css
.task-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  white-space: normal;
}
```

---

## 6. Tránh khóa `overflow: hidden` ở parent layout chính

Khóa `overflow: hidden` toàn bộ app làm nội dung bị cắt sạch mà không thể cuộn xuống xem. Chỉ khóa trục ngang:

```css
html,
body {
  margin: 0;
  width: 100%;
  min-height: 100%;
}

body {
  overflow-x: hidden;
  overflow-y: auto;
}
```

---

## 7. Panel AI hoặc Card bên trong Grid

Tránh đặt `min-width` lớn cho panel phụ khiến grid không co giãn được.

```css
.ai-panel {
  width: 100%;
  min-width: 0;
  max-width: 100%;
}
```

---

## 8. Cấu trúc Row nếu dùng CSS Grid hoặc Flex thay cho Table

Tránh dùng cột px cố định cho row vì tổng cột + gap + padding vượt card sẽ sinh scroll ngang.

### Nếu dùng Grid:
```css
.task-row {
  display: grid;
  grid-template-columns: minmax(220px, 1fr) max-content max-content minmax(120px, 180px) max-content;
  column-gap: 16px;
  align-items: center;
  width: 100%;
  min-width: 0;
}

@media (max-width: 1280px) {
  .task-row {
    grid-template-columns: minmax(180px, 1fr) max-content max-content max-content;
  }
  .task-assignee {
    display: none;
  }
}
```

### Nếu dùng Flex:
Tránh dùng `justify-content: space-between` vì nó đẩy phần tử ra hai mép tạo khoảng trắng lớn ở giữa.
```css
.task-row {
  display: flex;
  align-items: center;
  gap: 16px;
}
```

---

## 9. Cấu trúc Sidebar & Main Layout chuẩn (Không giới hạn max-width)

```css
.app-shell {
  display: flex;
  width: 100%;
  min-height: 100dvh;
  overflow: hidden;
}

.sidebar {
  flex: 0 0 280px;
  width: 280px;
  min-height: 100dvh;
}

.main-shell {
  flex: 1;
  min-width: 0;
  min-height: 100dvh;
  overflow-y: auto;
  overflow-x: hidden;
}

.page-container {
  width: 100%;
  max-width: none; /* Rộng tối đa theo màn hình ultrawide/đa màn hình */
  margin-inline: auto;
  padding: 24px;
  box-sizing: border-box;
}
```

---

## 10. Điểm dừng (Breakpoints) tối ưu cho Dashboard

Laptop 1366px khi zoom 125% có viewport CSS tương đương khoảng 1090px. Dashboard cần định nghĩa các breakpoints:
`1600px`, `1440px`, `1280px`, `1100px`, `900px`, `768px`.

```css
.dashboard-grid {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(340px, 1fr);
  gap: 24px;
}

@media (max-width: 1280px) {
  .dashboard-grid {
    grid-template-columns: minmax(0, 1.4fr) minmax(300px, 1fr);
    gap: 16px;
  }
}

@media (max-width: 1100px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 11. Các "Nghi phạm" gây khóa layout (Intrinsic Sizing)

Khi màn hình còn rất nhiều khoảng trống bên phải nhưng toàn bộ dashboard bị co cụm ở giữa, hãy kiểm tra ngay:

* **Nghi phạm 1: `max-width` ở container ngoài**
  - Tìm class: `max-w-5xl`, `max-w-6xl`, `max-w-7xl`, `container`, `mx-auto`, `w-[1200px]`, `w-[1280px]`.
  - Khắc phục (Tailwind): Thay `mx-auto max-w-7xl px-6` thành `w-full max-w-none px-6`.
* **Nghi phạm 2: Main content thiếu `flex: 1` hoặc `min-width: 0`**
  - Khắc phục:
    ```tsx
    <div className="flex min-h-dvh w-full">
      <Sidebar className="shrink-0" />
      <main className="min-w-0 flex-1">
        ...
      </main>
    </div>
    ```
* **Nghi phạm 3: Grid tổng dùng cột cứng**
  - Tránh: `grid-template-columns: 645px 455px;`
  - Khắc phục: `grid-template-columns: minmax(0, 1.55fr) minmax(360px, 0.9fr);`
* **Nghi phạm 4: Table đang `table-layout: fixed` hoặc `min-width` quá lớn**
  - Tránh: `table-fixed` khiến các cột bị bó theo width đã định, `min-w-[720px]` gây scroll ngang.
  - Khắc phục: Đổi sang `table-auto` và `min-w-0`. Đặt `w-[1%] whitespace-nowrap` cho các cột phụ để chúng ôm vừa nội dung, nhường diện tích còn lại cho cột chính (`w-auto`).
* **Nghi phạm 5: Text bị truncate có chủ đích**
  - Tránh dùng `truncate` vô tội vạ làm mất chữ.
  - Khắc phục: Thay `truncate` thành `whitespace-normal break-words line-clamp-2` để text xuống dòng tự nhiên.
* **Nghi phạm 6: Flex child có `shrink-0` hoặc `flex-basis` cứng**
  - Tránh: `w-[640px] shrink-0`.
  - Khắc phục: `flex: 1 1 0; min-width: 0; width: auto;`.

---

## 12. Cách tìm lỗi chính xác trong DevTools

Chọn vùng dashboard trong Elements, đi từ ngoài vào trong và xem phần `Computed` ở các node chính:
`body -> #root -> app-shell -> main-shell -> page-content -> dashboard-container`.

### Đoạn Console tìm các phần tử bị giới hạn max-width:
```js
[...document.querySelectorAll('*')]
  .map((el) => {
    const style = getComputedStyle(el);
    const rect = el.getBoundingClientRect();

    return {
      el,
      width: Math.round(rect.width),
      maxWidth: style.maxWidth,
      display: style.display,
      overflow: style.overflow,
    };
  })
  .filter(
    (item) =>
      item.maxWidth !== 'none' &&
      item.width > 500
  );
```

### Đoạn Console tìm chính xác element con gây scroll ngang trong bảng:
```js
const wrapper = document.querySelector('.task-table-wrapper');
if (wrapper) {
  [...wrapper.querySelectorAll('*')]
    .filter((el) => el.scrollWidth > el.clientWidth + 1)
    .map((el) => {
      const style = getComputedStyle(el);
      return {
        element: el,
        clientWidth: el.clientWidth,
        scrollWidth: el.scrollWidth,
        width: style.width,
        minWidth: style.minWidth,
        paddingLeft: style.paddingLeft,
        paddingRight: style.paddingRight,
        whiteSpace: style.whiteSpace,
        display: style.display,
        gridTemplateColumns: style.gridTemplateColumns,
      };
    });
}
```

---

## Bộ CSS chống vỡ layout mặc định

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body,
#root {
  width: 100%;
  min-height: 100%;
  margin: 0;
}

img,
svg,
video,
canvas {
  display: block;
  max-width: 100%;
}

button,
input,
select,
textarea {
  min-width: 0;
  font: inherit;
}

.flex-item,
.grid-item,
.card,
.panel,
.main-content {
  min-width: 0;
  max-width: 100%;
}

p,
span,
h1,
h2,
h3,
h4,
td,
th {
  overflow-wrap: break-word;
}
```

---

## HƯỚNG DẪN THỰC TẾ CHO DASHBOARD EXPORTMATE (INTRINSIC RESPONSIVE LAYOUT)

### 1. Bảng việc cần làm ngay (TaskListTable)
* Dùng `table-layout: auto` và `min-width: 0` trên thẻ `<table>`.
* Cột tên công việc nhận toàn bộ khoảng trống còn lại (`w-auto`), các cột phụ chỉ rộng bằng nội dung (`w-[1%] whitespace-nowrap`).
* Giảm padding ngang của `th` và `td` từ `16px` xuống `10px` để tránh cộng dồn padding gây tràn.
* Tên công việc bọc trong tag flex/block có `min-w-0` để tự động ngắt dòng tối đa 2 dòng.

---

## PROMPT GỌI AGENT SỬA GIAO DIỆN TRỰC TIẾP

Bất kỳ Agent nào khi được giao nhiệm vụ tối ưu responsive cho các trang của ExportMate cần tuân thủ prompt mẫu sau:

```text
Fix horizontal scroll bên trong bảng “Việc cần làm ngay”.

Nguyên nhân cần kiểm tra:
- table hoặc row có min-width cố định;
- grid-template-columns dùng px cố định;
- padding ngang của th/td quá lớn;
- border-spacing;
- justify-content: space-between;
- white-space: nowrap áp dụng cho toàn bộ table;
- action button hoặc assignee có min-width quá lớn.

Yêu cầu:
1. Bảng width: 100%, min-width: 0, table-layout: auto.
2. border-collapse: collapse và border-spacing: 0.
3. Giảm padding ngang của th/td xuống 10–12px.
4. Cột công việc lấy toàn bộ không gian còn lại.
5. Cột ưu tiên, ngày, người phụ trách và hành động chỉ rộng theo nội dung.
6. Chỉ các cột phụ dùng white-space: nowrap.
7. Tên công việc được wrap tối đa 2 dòng.
8. Xóa min-width px khỏi table, row và action button.
9. Không dùng justify-content: space-between cho row.
10. Không dùng overflow-x: auto để che lỗi khi bảng hoàn toàn có thể vừa card.
11. Báo chính xác CSS nào đã gây scroll ngang.
```

---

## 4. CHỐNG RỚT CHỮ (TEXT WRAPPING) & TỐI ƯU 2 NÚT CTA CÙNG DÒNG TRÊN MOBILE

### A. 2 Nút Action (CTA) Cùng Dòng Không Rớt Chữ
Màn hình mobile (< 640px) luôn dùng `flex: 1 1 0px` kết hợp `white-space: nowrap` và `font-size: clamp(...)`:

```css
.hero-cta-group {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
}

.hero-cta-group .btn-custom {
  flex: 1 1 0px;
  white-space: nowrap !important;
  text-align: center;
  justify-content: center;
  font-size: clamp(0.775rem, 3.2vw, 1.05rem) !important;
  padding: clamp(0.65rem, 2.5vw, 0.9rem) clamp(0.4rem, 1.8vw, 1.5rem) !important;
  min-width: 0;
}
```

### B. Badge & Header Tags Không Bao Giờ Rớt Chữ (Ví dụ: "✨ Hiện đại & Rõ ràng")
Mọi badge, tag trạng thái nằm trong flex header bắt buộc có 2 thuộc tính:
- `white-space: nowrap;`
- `flex-shrink: 0;`

```tsx
<span
  style={{
    whiteSpace: 'nowrap',
    flexShrink: 0,
    fontSize: 'clamp(0.65rem, 2vw, 0.75rem)',
    padding: '0.25rem 0.6rem'
  }}
>
  <Sparkles size={12} /> Hiện đại &amp; Rõ ràng
</span>
```

