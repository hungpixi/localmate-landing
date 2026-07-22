# ExportMate Responsive Dashboard Layout Standard

## 1. Mục tiêu bắt buộc

Mọi dashboard và màn hình quản trị phải:

- Không truncate nội dung quan trọng.
- Không rớt chữ, mất chữ hoặc che nội dung ở browser zoom 80%, 90%, 100%, 110%, 125%, 150%.
- Không xuất hiện horizontal scrollbar ở cấp `body`, `html`, page shell hoặc dashboard main.
- Không tạo khoảng trắng lớn chỉ vì hai card có lượng nội dung khác nhau.
- Không dùng chiều cao cố định cho card chứa dữ liệu động.
- Không ép card lớn nằm cạnh card nhỏ chỉ để lấp đầy một hàng.
- Nội dung phải tự giãn theo vùng trống có sẵn.
- Layout phải ổn định từ mobile đến màn hình desktop lớn.

Không sửa cục bộ bằng cách tăng width, height hoặc thêm overflow tùy tiện.
Phải sửa từ layout system, grid system và component primitives.

---

## 2. Quy chuẩn 12-column grid

Dashboard sử dụng grid 12 cột.

```css
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: clamp(16px, 1.5vw, 24px);
  align-items: start;
  width: 100%;
  min-width: 0;
}
```

Mỗi grid child bắt buộc:

```css
.dashboard-grid > * {
  min-width: 0;
}
```

Không dùng:

```css
grid-template-columns: repeat(12, 1fr);
```

khi child có table, chart, text dài hoặc component third-party.

Phải dùng:

```css
repeat(12, minmax(0, 1fr))
```

để grid item được phép co đúng cách.

---

## 3. Phân loại card theo kích thước và độ phức tạp

### Small card

Dùng cho:

* KPI.
* Số liệu ngắn.
* Một trạng thái.
* Một CTA.
* Nội dung tối đa khoảng 14 dòng.

Desktop:

```css
.card--small {
  grid-column: span 3;
}
```

### Medium card

Dùng cho:

* Danh sách ngắn.
* Progress.
* Donut chart đơn giản.
* Tối đa khoảng 46 items.
* Nội dung không cần scroll quang.

Desktop:

```css
.card--medium {
  grid-column: span 6;
}
```

### Large card

Dùng cho:

* Table.
* Timeline.
* Biểu đồ nhiều trục.
* Form dài.
* Danh sách nhiều cột.
* Nội dung có từ 5 trường dữ liệu trở lên.
* Component dự kiến cần trên 4 columns nội dung thực tế.
* Component có chiều cao thay đổi mạnh theo dữ liệu.

Large card bắt buộc đứng một hàng riêng:

```css
.card--large {
  grid-column: 1 / -1;
}
```

### Full-width card

Dùng cho:

* Data table chính.
* Hồ sơ doanh nghiệp.
* Form onboarding.
* Roadmap.
* Product management.
* Document repository.
* Các khu vực nghiệp vụ chính.

```css
.card--full {
  grid-column: 1 / -1;
}
```

---

## 4. Quy tắc quá 4 data columns thì một card một row

Nếu nội dung bên trong card có trên 4 cột dữ liệu độc lập, card đó không được xếp cạnh card khác.

Ví dụ:

* Tài liệu.
* Loại.
* Trạng thái.
* Ngày cập nhật.
* Người phụ trách.

Đây là table 5 cột, vì vậy bắt buộc dùng:

```tsx
<Card className="card--large">
  <DocumentTable />
</Card>
```

Không được:

```tsx
<Card className="card--medium">
  <DocumentTable />
</Card>
```

Không đặt table 5 cột bên trái và một card danh sách nhỏ bên phải.

Lý do:

* Table cần chiều rộng lớn.
* Nội dung dài sẽ bị truncate.
* Browser zoom làm table overflow.
* Card bên phải thường ít dữ liệu, gây khoảng trắng.
* Hai card có mật độ thông tin không cân bằng.

Quy tắc tổng quát:

```text
1-2 data fields   small card
3-4 data fields   medium card
5+ data fields    large/full-width card
table             full-width by default
complex chart     full-width by default
long form         full-width by default
```

---

## 5. Không stretch card theo chiều cao

Dashboard grid mặc định phải dùng:

```css
align-items: start;
```

Không dùng:

```css
align-items: stretch;
```

Card không được đặt:

```css
height: 100%;
```

trừ khi đó là một nhóm card có chủ đích rõ ràng, cùng loại, cùng lượng nội dung và cần cân bằng chiều cao.

Card mặc định:

```css
.dashboard-card {
  min-width: 0;
  height: auto;
  min-height: 0;
  align-self: start;
}
```

Không dùng fixed height:

```css
height: 420px;
height: 500px;
```

cho card chứa:

* Table.
* Danh sách động.
* Hồ sơ.
* Form.
* Timeline.
* Alert list.

Được phép dùng `min-height` cho skeleton hoặc empty state, nhưng không được làm card dữ liệu thật bị kéo cao không cần thiết.

---

## 6. Không ghép card chỉ để lấp chỗ trống

Agent phải ưu tiên:

1. Khả năng đọc.
2. Không truncate.
3. Cân bằng mật độ thông tin.
4. Responsive.
5. Sau cùng mới đến việc lấp đầy khoảng trống.

Không được đặt hai card cạnh nhau khi:

* Một card có table, một card chỉ có 3 items.
* Một card cao thay đổi theo dữ liệu, card kia gần như cố định.
* Một card cần scroll ngang.
* Hai card không cùng cấp độ thông tin.
* Một card có trên 4 data columns.
* Một card có nội dung quan trọng hơn rõ rệt.

Trong trường hợp đó, tách thành hai row:

```tsx
<section className="dashboard-grid">
  <DocumentTableCard className="card--full" />
  <ExpiringDocumentsCard className="card--full" />
</section>
```

Hoặc đặt card nhỏ vào một section riêng gồm các card cùng loại.

---

## 7. Quy chuẩn section thay vì một grid khổng lồ

Không đưa toàn bộ dashboard vào một grid duy nhất rồi tùy tiện `span`.

Phải chia theo section:

```tsx
<main className="dashboard-page">
  <section className="dashboard-grid dashboard-grid--kpi">
    {/* KPI cards */}
  </section>

  <section className="dashboard-grid dashboard-grid--summary">
    {/* Các card summary cùng loại */}
  </section>

  <section className="dashboard-grid dashboard-grid--data">
    {/* Table và nội dung nghiệp vụ lớn */}
  </section>
</main>
```

Mỗi section chỉ chứa các card có:

* Vai trò tương tự.
* Mật độ thông tin tương đương.
* Chiều cao dự kiến tương đồng.
* Hành vi responsive tương đồng.

Không trộn KPI, table, form và alert list vào cùng một row system.

---

## 8. Responsive breakpoints

### Desktop lớn: từ 1440px

* Small: span 3.
* Medium: span 6.
* Large/full: span 12.
* Table mặc định span 12.

### Laptop: 1024px-1439px

* Small: span 4 hoặc 6.
* Medium: span 6 hoặc 12.
* Large/full: span 12.
* Table luôn span 12.

### Tablet: 768px-1023px

* Small: span 6.
* Medium, large, full: span 12.
* Không đặt table cạnh card khác.

### Mobile: dưới 768px

Tất cả card:

```css
grid-column: 1 / -1;
```

CSS tham khảo:

```css
.card--small {
  grid-column: span 3;
}

.card--medium {
  grid-column: span 6;
}

.card--large,
.card--full {
  grid-column: 1 / -1;
}

@media (max-width: 1439px) {
  .card--small {
    grid-column: span 4;
  }
}

@media (max-width: 1199px) {
  .card--small,
  .card--medium {
    grid-column: span 6;
  }

  .card--large,
  .card--full,
  .card--table {
    grid-column: 1 / -1;
  }
}

@media (max-width: 767px) {
  .dashboard-grid > * {
    grid-column: 1 / -1;
  }
}
```

---

## 9. Container queries cho component tái sử dụng

Không chỉ phụ thuộc viewport. Card phải phản ứng theo chiều rộng container thực tế.

```css
.dashboard-card-wrapper {
  container-type: inline-size;
}

@container (max-width: 700px) {
  .card-toolbar {
    flex-direction: column;
    align-items: stretch;
  }

  .card-actions {
    width: 100%;
  }
}
```

Dùng container query cho:

* Toolbar.
* Header card.
* Form fields.
* Chart legend.
* Action buttons.
* Filter rows.

---

## 10. Quy chuẩn table

Table phải có wrapper riêng:

```css
.table-shell {
  width: 100%;
  min-width: 0;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
}
```

Table được phép có `min-width`, nhưng wrapper phải quản lý scroll:

```css
.data-table {
  width: 100%;
  min-width: 820px;
  border-collapse: collapse;
}
```

Không đặt:

```css
overflow-x: auto;
```

trên:

* `body`
* `main`
* page container
* toàn bộ dashboard
* toàn bộ card nếu card còn header/action

Scroll chỉ thuộc về `.table-shell`.

Cấu trúc đúng:

```tsx
<Card>
  <CardHeader />
  <div className="table-shell">
    <table className="data-table">...</table>
  </div>
</Card>
```

---

## 11. Quy chuẩn text và truncate

Không dùng truncate như giải pháp mặc định.

Chỉ truncate cho:

* Filename trong list compact.
* Email dài.
* URL.
* ID.
* Metadata phụ.

Không truncate:

* Tiêu đề nghiệp vụ chính.
* Trạng thái.
* Tên người phụ trách.
* CTA.
* Nội dung cần ra quyết định.
* Cảnh báo.
* Nhãn field.

Cell text mặc định:

```css
.table-cell {
  min-width: 0;
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: normal;
}
```

Chỉ dùng ellipsis khi có tooltip hoặc expandable content:

```css
.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

Không dùng `white-space: nowrap` hàng loạt cho toàn bộ table.

---

## 12. Quy chuẩn flexbox

Mọi flex child chứa text hoặc table bắt buộc có:

```css
.flex-child {
  min-width: 0;
}
```

Layout main:

```css
.app-shell {
  display: flex;
  width: 100%;
  min-width: 0;
}

.app-main {
  flex: 1 1 auto;
  min-width: 0;
  width: auto;
}
```

Sidebar:

```css
.sidebar {
  flex: 0 0 var(--sidebar-width);
}
```

Không tính main width bằng:

```css
width: calc(100vw - 280px);
```

vì dễ overflow khi:

* Có scrollbar.
* Browser zoom.
* Sidebar thay đổi.
* Padding thay đổi.
* OS scaling.

---

## 13. Spacing system

Chỉ dùng spacing scale thống nhất:

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
}
```

Dashboard page:

```css
.dashboard-page {
  width: 100%;
  min-width: 0;
  padding: clamp(16px, 2vw, 32px);
}
```

Không hard-code ngẫu nhiên:

```css
margin-left: 37px;
gap: 29px;
padding-right: 53px;
```

---

## 14. Empty state và dữ liệu ít

Card có dữ liệu ít không được kéo cao bằng card bên cạnh.

Nếu card có 03 item:

* Hiển thị chiều cao tự nhiên.
* Có thể dùng CTA hoặc empty state.
* Không thêm khoảng trắng giả.
* Không dùng `justify-content: space-between` để đẩy nội dung ra xa nhau.
* Không dùng fixed height để cân với card khác.

Card list:

```css
.list-card {
  height: auto;
  align-self: start;
}
```

---

## 15. Quy tắc quyết định layout tự động

Trước khi render một card, phân loại:

```ts
type CardSize = "small" | "medium" | "large" | "full";

function resolveCardSize(config: {
  isTable?: boolean;
  dataColumns?: number;
  isLongForm?: boolean;
  isComplexChart?: boolean;
  dynamicContent?: boolean;
}): CardSize {
  if (
    config.isTable ||
    config.isLongForm ||
    config.isComplexChart ||
    (config.dataColumns ?? 0) > 4
  ) {
    return "full";
  }

  if (config.dynamicContent || (config.dataColumns ?? 0) >= 3) {
    return "medium";
  }

  return "small";
}
```

Agent không được chọn span chỉ dựa trên screenshot.
Phải chọn dựa trên loại nội dung và độ phức tạp dữ liệu.

---

## 16. Kiểm thử bắt buộc

Trước khi hoàn thành bất kỳ màn hình nào, kiểm tra:

### Viewport

* 360x800
* 390x844
* 768x1024
* 1024x768
* 1280x720
* 1366x768
* 1440x900
* 1536x864
* 1920x1080

### Browser zoom

* 80%
* 90%
* 100%
* 110%
* 125%
* 150%

### Data states

* Không có dữ liệu.
* 1 item.
* 3 items.
* 10 items.
* Nội dung tiếng Việt dài.
* Filename dài.
* Tên doanh nghiệp dài.
* Trạng thái dài.
* Người phụ trách tên dài.
* Dữ liệu loading.
* API error.

### Tiêu chí pass

* Không horizontal scroll ở page.
* Không che nội dung.
* Không card nào có fixed height làm mất dữ liệu.
* Không card lớn nằm cạnh card nhỏ gây khoảng trắng.
* Table trên 4 cột phải full-width.
* Grid child đều có `min-width: 0`.
* Card không bị stretch ngoài ý muốn.
* Không có text quan trọng bị ellipsis.
* Layout vẫn đọc được ở 125% và 150%.

---

## 17. Các anti-pattern bị cấm

Không được sử dụng các cách sửa sau:

```css
width: 100vw;
width: calc(100vw - sidebarWidth);
height: 100%;
height: 500px;
overflow: hidden;
white-space: nowrap;
position: absolute;
min-width: 1200px;
```

trên các layout container chính nếu không có lý do được ghi chú rõ ràng.

Không được:

* Che lỗi bằng `overflow: hidden`.
* Tăng width cho đến khi hết truncate.
* Giảm font-size để nhét nội dung.
* Ép card bằng chiều cao nhau.
* Dùng quá nhiều pixel cố định.
* Đặt table cạnh card nhỏ.
* Cho toàn page scroll ngang.
* Sửa một breakpoint nhưng làm hỏng breakpoint khác.

---

## 18. Yêu cầu khi agent sửa layout

Khi audit hoặc sửa một màn hình, agent phải thực hiện theo thứ tự:

1. Xác định overflow bắt đầu từ element nào.
2. Kiểm tra `min-width: 0` của grid/flex children.
3. Kiểm tra fixed width, fixed height và `100vw`.
4. Phân loại card small, medium, large hoặc full.
5. Đưa table hoặc nội dung trên 4 columns thành full-width.
6. Đặt `align-items: start`.
7. Loại bỏ `height: 100%` không cần thiết.
8. Chuyển horizontal scroll vào đúng `.table-shell`.
9. Kiểm tra text wrapping và truncate.
10. Test toàn bộ viewport, zoom và data states.

Không kết thúc task chỉ vì screenshot ở 1440px trông đúng.
Task chỉ hoàn thành khi vượt qua toàn bộ validation matrix.
