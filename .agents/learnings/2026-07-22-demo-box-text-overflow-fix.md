# Learning: Sửa lỗi tràn chữ trong Box/Button Flex Container trên Mobile UI

## 1. Nguy cơ & Triệu chứng (Problem)
Trên các màn hình điện thoại nhỏ (iPhone SE 375px, Android 360px), các khối thẻ chọn (Option Box / Choice Button) chứa câu văn dài kết hợp với icon `flex items-center justify-between` thường bị đè hoặc tràn viền ra khỏi khung container.

Nguyên nhân chính:
- Thẻ flex con (`<span>`) mặc định có `min-width: auto`, không tự thu nhỏ bên dưới chiều rộng nội dung 1 dòng.
- Cụm `justify-between` mà không có `min-w-0` hoặc `flex-1` khiến đoạn văn không ngắt dòng (wrap) mà đẩy dải flex đè ngang viền thẻ.
- Icon đi kèm không có `shrink-0` dễ bị co méo hình shape.

## 2. Kỹ thuật sửa triệt để (Solution Pattern)
```tsx
// Trước (Lỗi tràn chữ):
<button className="w-full p-2.5 flex items-center justify-between">
  <span>Trải nghiệm Giao diện UI/UX & Luồng làm việc B2B Export</span>
  <CheckCircle2 className="w-4 h-4" />
</button>

// Sau (Đúng chuẩn Intrinsic Responsive & Responsive Anti-Overflow):
<button className="w-full p-3 text-left flex items-start justify-between gap-2 min-w-0">
  <span className="flex-1 min-w-0 break-words leading-relaxed">
    Trải nghiệm Giao diện UI/UX & Luồng làm việc B2B Export
  </span>
  <CheckCircle2 className="w-4 h-4 text-[#00A889] shrink-0 mt-0.5" />
</button>
```

## 3. Các file đã cập nhật trong task
- `src/pages/Demo/DemoLandingPage.tsx`: Cập nhật padding card `p-4 sm:p-8`, thêm `flex-1 min-w-0 break-words` và `shrink-0` cho thẻ chọn vai trò, giai đoạn xuất khẩu và mục đích trải nghiệm.
- `.agents/rules/layout-anti-overflow.md`: Thêm quy chuẩn cụ thể cho Box Option / Button Flex container.
