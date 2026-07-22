# Hướng dẫn Kiến trúc React SPA cho ExportMate

Tài liệu này định nghĩa cấu trúc, tầng giao diện và các quy tắc phát triển nhằm giúp React SPA của ExportMate **kế thừa tốt, tái sử dụng cao, ít copy-paste**.

---

## 1. Tách UI thành 4 cấp

### Cấp 1 — Design Primitives

Đây là các component nhỏ nhất, dùng toàn hệ thống và không chứa nghiệp vụ (business logic):

```txt
Button
Input
Select
Textarea
Checkbox
Badge
Avatar
Icon
Card
Modal
Drawer
Tooltip
Tabs
Table
Progress
Skeleton
EmptyState
```

**Ví dụ:**
```tsx
<Button variant="primary" size="md">
  Lưu thay đổi
</Button>

<Button variant="outline" icon={<PlusIcon />}>
  Thêm sản phẩm
</Button>
```
*Nguyên tắc:* Tuyệt đối không viết lại button hoặc input riêng cho từng trang.

---

### Cấp 2 — Shared Application Components

Đây là các component có ngữ nghĩa chung trong ExportMate nhưng được chuẩn hóa để hiển thị dữ liệu nghiệp vụ ở nhiều nơi:

```txt
PageHeader
PageToolbar
StatCard
MetricCard
StatusBadge
RiskBadge
DataTable
FilterBar
SearchInput
ActionMenu
UploadZone
DocumentCard
TaskCard
Timeline
ActivityFeed
ScoreGauge
ReadinessChart
SupplierPreview
```

**Ví dụ:** Cùng một `StatusBadge` dùng cho sản phẩm, chứng từ, buyer, shipment:
```tsx
<StatusBadge status="approved" />
<StatusBadge status="pending" />
<StatusBadge status="expired" />
```

Component tự ánh xạ màu và nhãn:
```tsx
const STATUS_CONFIG = {
  approved: {
    label: "Đã duyệt",
    tone: "success", // Teal/Green
  },
  pending: {
    label: "Chờ xử lý",
    tone: "warning", // Orange
  },
  expired: {
    label: "Hết hạn",
    tone: "danger", // Red
  },
};
```

---

### Cấp 3 — Feature Components

Mỗi module có component riêng nhưng vẫn tái sử dụng primitive và shared component:

```txt
features/
├── dashboard/
├── companies/
├── products/
├── readiness/
├── buyers/
├── rfq/
├── documents/
├── shipments/
├── compliance/
└── roadmap/
```

**Ví dụ trong `products`:**
```txt
products/
├── api/
├── components/
│   ├── ProductCard.tsx
│   ├── ProductForm.tsx
│   ├── ProductTable.tsx
│   ├── ProductStatus.tsx
│   └── ProductDocuments.tsx
├── hooks/
├── schemas/
├── types/
├── utils/
└── pages/
```

---

### Cấp 4 — Page Composition

Trang chỉ nên đóng vai trò là nơi:
* Gọi dữ liệu (data fetching) thông qua hooks;
* Điều phối trạng thái (state coordination);
* Ghép các component lại với nhau;
* Xử lý phân quyền (authorization);
* Xử lý điều hướng (navigation).

*Nguyên tắc:* Không nhét toàn bộ giao diện vào file page.

**Sai (Chứa quá nhiều JSX logic):**
```tsx
export default function ProductsPage() {
  return (
    <div>
      {/* 700 dòng JSX chứa cả table, form, chart... */}
    </div>
  );
}
```

**Đúng (Tách biệt rõ ràng):**
```tsx
export default function ProductsPage() {
  const products = useProducts();

  return (
    <PageLayout>
      <PageHeader
        title="Quản lý sản phẩm"
        description="Chuẩn hóa thông tin sản phẩm phục vụ xuất khẩu."
        actions={<CreateProductButton />}
      />

      <ProductStats data={products.stats} />

      <ProductToolbar />

      <ProductTable
        data={products.data}
        isLoading={products.isLoading}
      />
    </PageLayout>
  );
}
```

---

## 2. Cấu trúc thư mục phù hợp ExportMate

```txt
src/
├── app/
│   ├── App.tsx
│   ├── router.tsx
│   ├── providers.tsx
│   └── query-client.ts
│
├── layouts/
│   ├── AppLayout.tsx
│   ├── AuthLayout.tsx
│   ├── PublicLayout.tsx
│   ├── DashboardLayout.tsx
│   └── SupplierPageLayout.tsx
│
├── components/
│   ├── ui/                 # Design primitives (Cấp 1)
│   ├── shared/             # Shared components (Cấp 2)
│   ├── navigation/
│   ├── data-display/
│   ├── feedback/
│   └── forms/
│
├── features/               # Feature components (Cấp 3)
│   ├── auth/
│   ├── dashboard/
│   ├── companies/
│   ├── supplier-page/
│   ├── products/
│   ├── readiness/
│   ├── roadmap/
│   ├── buyers/
│   ├── rfq/
│   ├── documents/
│   ├── compliance/
│   ├── shipments/
│   ├── logistics/
│   ├── reports/
│   └── settings/
│
├── services/               # Global services (client, storage...)
│   ├── api-client.ts
│   ├── storage.ts
│   ├── auth.ts
│   └── analytics.ts
│
├── hooks/                  # Global reusable hooks
│   ├── useDisclosure.ts
│   ├── useDebounce.ts
│   ├── usePagination.ts
│   ├── usePermissions.ts
│   └── useWorkspace.ts
│
├── lib/
│   ├── cn.ts
│   ├── format.ts
│   ├── validation.ts
│   ├── constants.ts
│   └── permissions.ts
│
├── store/                  # Global state (Zustand)
│   ├── auth.store.ts
│   ├── workspace.store.ts
│   └── ui.store.ts
│
├── types/                  # Global types
│   ├── api.ts
│   ├── common.ts
│   └── domain.ts
│
├── styles/
│   ├── globals.css
│   ├── tokens.css
│   └── utilities.css
│
└── assets/
```

*Điểm quan trọng:* **Feature tự sở hữu logic của feature**, không đưa hết component vào `src/components`.

---

## 3. Dùng layout kế thừa thay vì lặp sidebar và header

ExportMate có nhiều nhóm giao diện khác nhau:
```txt
AuthLayout
DashboardLayout
SupplierPageLayout
PublicWebsiteLayout
AdminLayout
```

**Ví dụ cấu hình layout:**
```tsx
export function DashboardLayout() {
  return (
    <div className="app-shell">
      <AppSidebar />

      <div className="app-main">
        <AppTopbar />

        <main className="page-container">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
```

**Cấu hình Router:**
```tsx
const router = createBrowserRouter([
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/buyers",
        element: <BuyersPage />,
      },
      {
        path: "/documents",
        element: <DocumentsPage />,
      },
    ],
  },
]);
```
*Lợi ích:* Sidebar, topbar, padding, responsive chỉ cần sửa ở một nơi duy nhất.

---

## 4. Sidebar phải chạy bằng cấu hình (Config)

Tuyệt đối không hard-code từng menu trong JSX.

**Cấu hình Menu:**
```tsx
export const navigation = [
  {
    label: "Tổng quan",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Hồ sơ xuất khẩu",
    icon: Building2,
    children: [
      {
        label: "Thông tin doanh nghiệp",
        href: "/company",
      },
      {
        label: "Supplier Page",
        href: "/supplier-page",
      },
      {
        label: "Readiness Assessment",
        href: "/readiness",
      },
    ],
  },
  {
    label: "Sản phẩm",
    icon: Package,
    href: "/products",
  },
];
```

**Render:**
```tsx
<AppSidebar items={navigation} />
```

*Lợi ích:* Dễ dàng lọc menu theo quyền (permissions) hoặc gói dịch vụ (tiers):
```tsx
const allowedItems = navigation.filter((item) =>
  hasPermission(item.permission)
);
```

---

## 5. Dùng generic component cho CRUD

ExportMate có rất nhiều danh sách thực thể: sản phẩm, buyer, tài liệu, lô hàng, RFQ, nhiệm vụ, chứng nhận, thành viên.

Tuyệt đối không tạo table engine riêng cho từng module. Hãy dùng `DataTable<T>` dùng chung:

```tsx
<DataTable<Product>
  data={products}
  columns={productColumns}
  getRowId={(row) => row.id}
  emptyState={{
    title: "Chưa có sản phẩm",
    description: "Thêm sản phẩm đầu tiên để chuẩn hóa hồ sơ.",
  }}
/>
```

**Định nghĩa columns riêng:**
```tsx
export const productColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Sản phẩm",
    cell: ({ row }) => (
      <ProductIdentity product={row.original} />
    ),
  },
  {
    accessorKey: "status",
    header: "Trạng thái",
    cell: ({ row }) => (
      <StatusBadge status={row.original.status} />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <ProductActions product={row.original} />
    ),
  },
];
```

---

## 6. Form phải tái sử dụng field component

Không code kiểu mỗi form lại tự dựng label, error, input. Hãy tạo các field dùng chung:
```txt
TextField
SelectField
TextareaField
CurrencyField
DateField
FileField
TagField
CountryField
CertificateField
```

**Ví dụ sử dụng:**
```tsx
<FormField
  control={form.control}
  name="productName"
  render={({ field }) => (
    <TextField
      label="Tên sản phẩm"
      placeholder="Ví dụ: Cà phê rang xay Arabica"
      required
      {...field}
    />
  )}
/>
```
*Lưu ý:* Luôn kết hợp React Hook Form, Zod và chia sẻ schema giữa frontend và backend.

```tsx
export const productSchema = z.object({
  name: z.string().min(2),
  hsCode: z.string().optional(),
  originCountry: z.string(),
  moq: z.number().positive().optional(),
});
```

---

## 7. Một form dùng cho cả Create và Edit

Tránh tạo riêng biệt `CreateProductForm` và `EditProductForm`. Hãy dùng cơ chế nhận diện qua `mode` hoặc `defaultValues`:

```tsx
// Khi tạo mới
<ProductForm
  mode="create"
  defaultValues={EMPTY_PRODUCT}
  onSubmit={createProduct}
/>

// Khi cập nhật
<ProductForm
  mode="edit"
  defaultValues={product}
  onSubmit={updateProduct}
/>
```
*Lợi ích:* Mọi thay đổi về layout form, validation rule chỉ cần chỉnh sửa tại một nơi.

---

## 8. Tách API khỏi component

Tuyệt đối không gọi `fetch()` hay `axios` trực tiếp trong component.

**Định nghĩa API client (ví dụ `features/products/api/product.api.ts`):**
```typescript
export const productApi = {
  list: (params: ProductQuery) =>
    apiClient.get<ProductListResponse>("/products", { params }),

  getById: (id: string) =>
    apiClient.get<Product>(`/products/${id}`),

  create: (payload: CreateProductInput) =>
    apiClient.post<Product>("/products", payload),

  update: (id: string, payload: UpdateProductInput) =>
    apiClient.patch<Product>(`/products/${id}`, payload),
};
```

**Định nghĩa Hook (React Query):**
```typescript
export function useProducts(params: ProductQuery) {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => productApi.list(params),
  });
}
```

**Sử dụng trong Component:**
```tsx
const { data, isLoading, error } = useProducts(filters);
```

---

## 9. Chuẩn hóa Domain Model

Tránh tình trạng một đối tượng có nhiều kiểu cấu trúc dữ liệu hoặc trạng thái khác nhau giữa các trang.

**Ví dụ Product Interface:**
```typescript
export interface Product {
  id: string;
  companyId: string;
  name: string;
  slug: string;
  sku?: string;
  hsCode?: string;
  category?: ProductCategory;
  status: ProductStatus;
  readinessScore: number;
  certifications: Certification[];
  packaging: PackagingSpecification[];
  markets: TargetMarket[];
  createdAt: string;
  updatedAt: string;
}
```

**Sử dụng Union Type cho các Status:**
```typescript
export type ProductStatus =
  | "draft"
  | "in_review"
  | "approved"
  | "needs_update"
  | "archived";
```
*Lưu ý:* Tuyệt đối không dùng string tự do (như `"Done"`, `"complete"`, `"completed"`, `"approved"` lẫn lộn).

---

## 10. Dùng Composition thay vì tạo quá nhiều biến thể

**Ví dụ `PageHeader` dùng chung:**
```tsx
<PageHeader
  title="Hồ sơ sản phẩm"
  description="Quản lý thông tin phục vụ buyer quốc tế."
  breadcrumbs={[
    { label: "Sản phẩm", href: "/products" },
    { label: product.name },
  ]}
  actions={
    <>
      <Button variant="outline">Xem Supplier Page</Button>
      <Button>Lưu thay đổi</Button>
    </>
  }
/>
```
Không cần tạo `ProductPageHeader`, `BuyerPageHeader`, `DocumentPageHeader`... trừ khi logic thực sự khác biệt.

---

## 11. Định nghĩa sẵn các Page Template

ExportMate chỉ có khoảng 6 kiểu màn hình chính:

*   **List Page:**
    ```tsx
    <EntityListPage header={...} stats={...} filters={...} table={...} />
    ```
*   **Detail Page:**
    ```tsx
    <EntityDetailPage header={...} sidebar={...} tabs={...} />
    ```
*   **Form Page:**
    ```tsx
    <EntityFormPage header={...} form={...} actions={...} />
    ```
*   **Dashboard Page:**
    ```tsx
    <DashboardPageTemplate metrics={...} primaryContent={...} secondaryContent={...} />
    ```
*   **Settings Page:**
    ```tsx
    <SettingsLayout navigation={settingsNavigation}>
      <Outlet />
    </SettingsLayout>
    ```
*   **Public Supplier Page:**
    ```tsx
    <SupplierPageTemplate hero={...} company={...} products={...} certificates={...} contact={...} />
    ```
*Nguyên tắc:* Nhiều màn hình không có nghĩa là nhiều layout. Hãy tái sử dụng các template này.

---

## 12. Cấu hình theo dữ liệu thay vì sao chép UI (Data-Driven UI)

Ví dụ giao diện Readiness Assessment có 6 nhóm:
```typescript
export const readinessDimensions = [
  { key: "business", label: "Doanh nghiệp", icon: Building2 },
  { key: "product", label: "Sản phẩm", icon: Package },
  { key: "packaging", label: "Bao bì", icon: Box },
  { key: "certification", label: "Chứng nhận", icon: BadgeCheck },
  { key: "compliance", label: "Tuân thủ", icon: ShieldCheck },
  { key: "market", label: "Thị trường", icon: Globe2 },
];
```

**Render chung:**
```tsx
<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
  {readinessDimensions.map((dimension) => (
    <ReadinessDimensionCard
      key={dimension.key}
      {...dimension}
      score={scores[dimension.key]}
    />
  ))}
</div>
```
*Nguyên tắc:* Không viết 6 Component card riêng biệt.

---

## 13. Theme và Design Token phải tập trung

```css
:root {
  --color-primary: 31 105 89;          /* #0B1F33 Navy hoặc #00A889 Teal */
  --color-primary-soft: 235 246 242;

  --color-success: 22 163 74;
  --color-warning: 217 119 6;
  --color-danger: 220 38 38;

  --surface-page: 248 250 249;
  --surface-card: 255 255 255;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;

  --sidebar-width: 272px;
  --topbar-height: 64px;
}
```
*Nguyên tắc:* Không rải màu hard-coded dạng `bg-[#176959]` khắp nơi. Hãy dùng semantic classes như `bg-primary text-primary-foreground`.

---

## 14. Phân quyền (Permission Engine) dùng lại

```typescript
export const permissions = {
  products: {
    view: "products.view",
    create: "products.create",
    update: "products.update",
    delete: "products.delete",
  },
  documents: {
    view: "documents.view",
    approve: "documents.approve",
  },
};
```

**Sử dụng Component Guard:**
```tsx
<PermissionGuard permission="products.create">
  <CreateProductButton />
</PermissionGuard>
```
*Nguyên tắc:* Không kiểm tra trực tiếp role cứng như `user.role === "ADMIN"`. Hãy kiểm tra theo permission cụ thể.

---

## 15. Technology Stack SPA chuẩn hóa

*   **React, TypeScript, Vite, React Router v7**
*   **TanStack Query:** Quản lý dữ liệu từ server.
*   **Zustand:** Quản lý UI state nhỏ, gọn, workspace hiện tại.
*   **React Hook Form & Zod:** Quản lý form state và validation.
*   **URL Search Params:** Lưu trạng thái filter, pagination, tab.
*   **LocalStorage:** Lưu tùy chọn nhẹ (preferences).
*   *Lưu ý:* Tuyệt đối không dùng Zustand để lưu trữ toàn bộ dữ liệu backend thay cho React Query cache.

---

## 16. Quy tắc phát triển Frontend (Antigravity Rules)

1. Không tạo component mới nếu component tương đương đã tồn tại.
2. Trước khi code phải tìm trong:
   * `src/components/ui`
   * `src/components/shared`
   * `src/features/*/components`
3. File component chính (Page) không vượt quá 250 dòng.
4. Component con không vượt quá 200 dòng (hãy tách nhỏ nếu có thể).
5. Không gọi fetch/axios trực tiếp trong component.
6. Không hard-code màu, route, permission hoặc status label.
7. Mọi form dùng React Hook Form và Zod.
8. Create và edit phải dùng chung form component.
9. Mọi danh sách dữ liệu dùng DataTable chung.
10. Sidebar và navigation phải sinh từ config.
11. Loading, empty, error state phải dùng component chung.
12. Không nhân bản layout.
13. Shared component không được phụ thuộc feature cụ thể.
14. Feature component không được import trực tiếp từ feature không liên quan.
15. Mọi UI phải responsive ở 360px, 768px, 1024px và 1440px.

---

## 17. Thực hành Phát triển & Kiểm soát Kỹ thuật (Frontend Engineering Framework)

Nhằm đảm bảo dự án không bị nát sau 30-50 màn hình khi làm việc theo phương thức Vibe Coding, các tác nhân AI và lập trình viên phải nắm rõ và tuân thủ khung kỹ thuật sau:

### 1. Tư duy Component (Component Thinking)
Đừng nhìn giao diện như từng trang độc lập. Hãy bóc tách và phân tích giao diện thành các thành phần:
*   **Layout:** Khung chứa trang (Sidebar, Header, Content area).
*   **Section:** Các khu vực nội dung lớn trên trang.
*   **Pattern:** Các khối chức năng lặp đi lặp lại.
*   **Component:** Các phần tử UI nhỏ hơn (Cấp 1 & Cấp 2).
*   **State:** Trạng thái điều khiển hiển thị.
*   **Data:** Dữ liệu nghiệp vụ.

*Ví dụ:* Trang chi tiết sản phẩm (Product Detail) không phải là "một trang" duy nhất, mà là sự lồng ghép có cấu trúc:
```txt
AppLayout
└── DetailPageTemplate
    ├── PageHeader
    ├── ProductSummary
    ├── TabNavigation
    ├── ProductForm
    ├── DocumentList
    └── ActivityTimeline
```

### 2. Hệ thống Thiết kế (Design System)
Toàn bộ dự án ExportMate phải sử dụng chung một hệ thống thiết kế tập trung bao gồm: màu sắc, typography (font chữ), spacing (khoảng cách), border radius, shadow, buttons, inputs, cards, tables, modals, badges và các màu trạng thái nghiệp vụ.

*Khuyến nghị:* Xây dựng một route riêng `/design-system` để hiển thị trực quan toàn bộ các component và các trạng thái của chúng, giúp kiểm tra tính nhất quán trước khi đưa vào sản xuất.

### 3. Hệ thống Phản hồi Linh hoạt (Responsive System)
Mọi component trong ExportMate phải responsive chuẩn hóa theo 4 breakpoints chính sau:
*   **Mobile:** `360px – 767px`
*   **Tablet:** `768px – 1023px`
*   **Laptop:** `1024px – 1439px`
*   **Desktop:** `1440px+`

Quy tắc xử lý component:
*   Khi nào Grid đổi số lượng cột (ví dụ từ 3 cột trên Desktop về 1 cột trên Mobile).
*   Khi nào Table (bảng) chuyển thành dạng Card list (danh sách thẻ) để tránh vỡ chiều ngang.
*   Cách thu gọn/ẩn Sidebar trên mobile (dùng overlay/drawer).
*   Text dài phải được truncate (cắt bớt bằng dấu `...`) hay wrap (xuống dòng) hợp lý.
*   Action buttons (nút hành động) phải nằm ở vị trí dễ chạm trên thiết bị di động (ví dụ sticky bottom bar hoặc action sheet).

### 4. Quản lý Trạng thái (State Management)
Tuyệt đối không lưu trữ bừa bãi mọi dữ liệu vào Zustand. Hãy phân biệt rõ 4 loại trạng thái:
*   **Server State:** Dữ liệu lấy từ API/backend (`products`, `buyers`, `documents`, `shipments`). Sử dụng **TanStack Query** để quản lý cache và đồng bộ.
*   **Form State:** Dữ liệu tạm thời người dùng đang nhập vào các ô input. Sử dụng **React Hook Form**.
*   **UI State:** Trạng thái giao diện như modal đóng/mở, sidebar thu gọn, tab hiện tại. Sử dụng local state (`useState`) hoặc **Zustand** cho UI state dùng chung toàn app.
*   **URL State:** Bộ lọc (filter), số trang (pagination), từ khóa tìm kiếm (search), tab đang chọn. **Bắt buộc lưu vào URL search params** (ví dụ `/products?page=2&status=approved&search=coffee`).

### 5. Mô hình hóa Dữ liệu (Data Modeling)
Xác định chính xác cấu trúc Object và mối quan hệ thực thể trước khi viết code giao diện.
Đối với ExportMate, cấu trúc quan hệ cốt lõi xoay quanh `Company`:
```txt
Company
├── Products
├── Certificates
├── Documents
├── Buyers
├── RFQs
├── Roadmaps
└── Shipments
```
Phải định nghĩa chặt chẽ:
*   Một Company sở hữu danh sách Product nào.
*   Chứng nhận (Certificate) thuộc về Company hay Product.
*   Tài liệu (Document) đính kèm theo lô hàng (Shipment) hay theo thực thể Company.
*   Buyer có thể thuộc về nhiều Workspace khác nhau không.
*   Các danh sách Status hợp lệ (sử dụng Union Type).

### 6. Hợp đồng API (API Contract)
Frontend và Backend phải thống nhất cấu trúc dữ liệu chung.

*Dữ liệu danh sách (Pagination):*
```json
{
  "data": [],
  "meta": {
    "page": 1,
    "pageSize": 20,
    "total": 127
  }
}
```

*Cấu trúc lỗi (Error format):*
```json
{
  "code": "PRODUCT_NOT_FOUND",
  "message": "Không tìm thấy sản phẩm",
  "fields": {}
}
```

### 7. Các trạng thái Giao diện (States Checklist)
Không chỉ thiết kế cho "Happy Path" (khi có đầy đủ dữ liệu và chạy mượt mà). Mỗi màn hình bắt buộc phải xử lý đủ các trạng thái sau:
1.  **Loading:** Trạng thái đang tải dữ liệu (sử dụng Skeleton hoặc Spinner).
2.  **Empty:** Khi không có dữ liệu hiển thị (có hình ảnh minh họa nhẹ, tiêu đề và nút CTA thêm mới).
3.  **Error:** Khi API lỗi (thông báo lỗi thân thiện, có nút Retry).
4.  **Permission denied:** Khi user không có quyền truy cập.
5.  **Offline:** Khi mất kết nối internet.
6.  **Partial data / Filter empty:** Khi bộ lọc không trả về kết quả nào.
7.  **Success:** Khi thực hiện hành động thành công (toast message hoặc success screen).

### 8. Kiến trúc Biểu mẫu (Form Architecture)
Form trong ExportMate thường rất phức tạp và chứa nhiều trường thông tin. Cần áp dụng:
*   **Schema validation** bằng Zod ở cả frontend và backend.
*   **Default values** sạch sẽ, tránh lỗi `undefined` input.
*   **Autosave / Draft mode** đối với các form dài.
*   Theo dõi **Dirty State** để cảnh báo khi người dùng nhấn thoát hoặc back trang khi chưa lưu thay đổi.
*   Chia nhỏ form lớn thành nhiều nhóm/section (ví dụ: Thông tin cơ bản -> Thông số xuất khẩu -> Bao bì -> Chứng nhận -> Giá cả -> Thị trường mục tiêu). Không nhét tất cả vào một file quá 1000 dòng.

### 9. Phân quyền & Đa doanh nghiệp (Permission & Multi-Tenant)
Thiết kế hệ thống xoay quanh 5 thực thể: `User`, `Workspace` (Doanh nghiệp), `Membership` (Mối quan hệ giữa User và Workspace), `Role` (Vai trò) và `Permission` (Quyền hạn).
*   Không kiểm tra cứng theo vai trò (`user.role === 'admin'`).
*   Kiểm tra động theo quyền cụ thể trong workspace hiện tại (ví dụ: `hasPermission('products.create')`).
*   Frontend ẩn/hiện nút UI để tăng UX, nhưng Backend phải kiểm tra chặt chẽ token và quyền thực thi trên API.

### 10. Hệ thống Định tuyến (Routing)
Cấu trúc route phân tầng rõ ràng, phản ánh cấu trúc thư mục và ngữ cảnh workspace:
```txt
/app/:workspaceId/dashboard
/app/:workspaceId/products
/app/:workspaceId/products/:productId
/app/:workspaceId/buyers
/app/:workspaceId/documents
```
*Nguyên tắc:* Không tự tạo route ngẫu hứng hoặc tùy tiện (như `/product-page-new-final-v2`). Cấu trúc route tốt giúp breadcrumbs chạy tự động, phân quyền theo layout route và deep-linking hoạt động chính xác.

### 11. Tiếp cận Tiện ích (Accessibility - A11y)
AI và nhà phát triển cần tuân thủ các checklist cơ bản sau:
*   Sử dụng phím Tab để di chuyển qua các input/button (Keyboard navigation).
*   Có trạng thái Focus rõ ràng cho mọi phần tử tương tác.
*   Mọi Input phải có Label đi kèm hoặc thuộc tính `aria-label`.
*   Đảm bảo độ tương phản màu sắc giữa text và nền.
*   Sử dụng modal focus trap để khi modal mở, focus không bị bay ra ngoài.
*   Sử dụng thẻ `<button>` thật thay vì dùng `div` gắn `onClick` để đảm bảo khả năng tương tác bằng bàn phím.
*   Hiển thị thông báo lỗi form rõ ràng, dễ tiếp cận.

### 12. Hiệu suất (Performance)
*   Sử dụng dynamic import (`React.lazy`) cho các route trang để giảm dung lượng file bundle ban đầu.
*   Tránh re-render thừa bằng cách sử dụng React.memo, useMemo, useCallback hợp lý cho các component nặng.
*   Áp dụng Pagination (phân trang) hoặc Infinite Scroll cho danh sách lớn.
*   Sử dụng virtual list (như `@tanstack/react-virtual`) nếu danh sách có hàng ngàn dòng.
*   Tối ưu hóa và nén dung lượng ảnh trước khi upload hoặc hiển thị.
*   Debounce các ô input tìm kiếm (chờ 300ms sau khi dừng gõ mới gọi API).
*   Không import nguyên cả thư viện (như `lodash`) mà chỉ import hàm cần dùng (ví dụ `import debounce from 'lodash/debounce'`).

### 13. Kiểm thử (Testing)
Tập trung kiểm thử các luồng nghiệp vụ cốt lõi (Core flows):
1.  Đăng nhập & Khởi tạo phiên làm việc.
2.  Tạo và cập nhật hồ sơ doanh nghiệp.
3.  Tạo sản phẩm & kiểm tra tính hợp lệ của HS Code.
4.  Thực hiện đánh giá năng lực xuất khẩu (Readiness Assessment).
5.  Tải lên và phân loại chứng từ xuất khẩu.
6.  Tạo trang nhà cung cấp (Supplier Page).
7.  Gửi yêu cầu báo giá (RFQ).
*Nguyên tắc:* Ưu tiên viết component test và End-to-End test cho các luồng trên thay vì cố gắng test 100% pixel giao diện.

### 14. Error Boundary & Logging
Tuyệt đối không để ứng dụng bị trắng trang (white screen) khi gặp lỗi JavaScript runtime.
*   Bọc ứng dụng bằng component `<ErrorBoundary>` để hiển thị giao diện báo lỗi thân thiện cùng nút reload/back.
*   Tích hợp hệ thống log tập trung để theo dõi: lỗi API, lỗi render, lỗi tải lên tệp tin, mã định danh request (request ID) và các hành động quan trọng của người dùng.

### 15. An toàn thông tin (Frontend Security)
*   Không lưu trữ JWT hoặc token nhạy cảm ở `localStorage` nếu hệ thống yêu cầu độ bảo mật cao (ưu tiên dùng HttpOnly cookie).
*   Tuyệt đối không tin tưởng dữ liệu gửi từ frontend. Backend luôn phải validate lại toàn bộ tham số.
*   Chống tấn công XSS bằng cách khử độc (sanitize) các chuỗi HTML đầu vào trước khi render bằng thư viện như `dompurify`.
*   Không đưa các khóa bí mật (Secret Keys) vào biến môi trường Vite (`.env`) bắt đầu bằng `VITE_`. Bất kỳ thứ gì được bundle vào client đều có thể bị giải mã và đọc được.

### 16. Quy trình Git chuẩn hóa
Mọi thay đổi code phải tuân theo quy trình nhánh:
*   `main`: Nhánh chạy production ổn định.
*   `develop`: Nhánh tích hợp các tính năng mới.
*   `feature/product-management`: Nhánh phát triển tính năng cụ thể.
*   `fix/mobile-sidebar`: Nhánh vá lỗi giao diện.
*Nguyên tắc:* Một thay đổi = một nhánh tính năng = một commit rõ nghĩa. Luôn chạy lint & build trước khi tạo Pull Request và gộp nhánh.

### 17. Tài liệu cho Agent (Documentation Engine)
Tất cả các agent làm việc trên dự án phải đọc và tuân thủ "Hiến pháp dự án" nằm trong thư mục `.agents/` và tệp `AGENTS.md`. 
Các đặc tả kỹ thuật cần được phân loại rõ ràng trong thư mục `.agents/PDR/`:
*   `product-requirements.md` (Yêu cầu sản phẩm)
*   `frontend-architecture.md` (Kiến trúc frontend)
*   `design-system.md` (Hệ thống thiết kế)
*   `database-schema.md` (Sơ đồ cơ sở dữ liệu)
*   `api-contracts.md` (Hợp đồng API)
*   `permissions.md` (Phần quyền chi tiết)
*   `routing.md` (Cấu trúc định tuyến)
*   `definition-of-done.md` (Định nghĩa hoàn thành)

### 18. Định nghĩa Hoàn thành (Definition of Done - DoD)
Một màn hình hoặc tính năng giao diện chỉ được coi là hoàn thành khi thỏa mãn đầy đủ checklist sau:
*   [ ] Đúng thiết kế thương hiệu và hệ thống thiết kế (Design System).
*   [ ] Hiển thị tốt trên cả máy tính (Desktop) và di động (Mobile).
*   [ ] Đã xử lý đầy đủ các trạng thái giao diện (Loading, Empty, Error).
*   [ ] Kết nối API thật hoặc thông qua adapter mock data chuẩn (không hard-code trong components).
*   [ ] Có validation biểu mẫu đầy đủ ở cả Client và Server.
*   [ ] Đã cấu hình phân quyền truy cập phù hợp.
*   [ ] Không còn lỗi hiển thị hoặc cảnh báo trong DevTools Console.
*   [ ] Không nhân bản hay trùng lặp code của component đã có.
*   [ ] Đã kiểm thử thủ công/tự động chạy tốt luồng nghiệp vụ chính.
*   [ ] Ứng dụng chạy build production thành công 100%.

---

## 18. Lộ trình Thực chiến cho Nhà phát triển (Vibe Engineering Road)

Để phát triển bền vững và kiểm soát tốt chất lượng code do AI sinh ra, nhà phát triển nên đi theo lộ trình 3 giai đoạn:

*   **Giai đoạn 1 — Giữ code sạch:** Tập trung nắm chắc tư duy Component, sử dụng Props, Composition, Layout kế thừa, tổ chức thư mục theo Feature và tuân thủ Design System cùng hệ thống định tuyến (Routing).
*   **Giai đoạn 2 — Giữ dữ liệu sạch:** Làm chủ TypeScript, thiết kế mô hình dữ liệu (Data model), định nghĩa hợp đồng API, quản lý Server state bằng TanStack Query, validation form và xử lý lỗi đồng bộ.
*   **Giai đoạn 3 — Giữ sản phẩm tốt:** Đi sâu vào phân quyền linh hoạt (Multi-tenant permissions), tối ưu hiệu suất, kiểm thử tự động, bảo mật frontend và ghi log lỗi tập trung.

> *Nhớ kỹ:* AI có thể tạo ra hàng ngàn dòng code rất nhanh, nhưng lập trình viên phải là người quyết định **kiến trúc**: Component này thuộc tầng nào, dữ liệu đến từ đâu, có dùng lại được không, quyền hạn nằm ở đâu, xử lý lỗi thế nào và tiêu chuẩn nào mới được coi là hoàn thành.

