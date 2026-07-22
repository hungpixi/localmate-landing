# Lesson: Anti Text-Wrapping & Mobile Responsive Auto-Resizing

**Date:** 2026-07-22
**Category:** Mobile UX / Responsive CSS / Component Layout

## Problem Identified
On mobile screens (width 360px - 414px):
1. **Primary & Secondary CTA Buttons**: Stacked awkwardly vertically because explicit width/padding forced line wrapping, or button labels broke into 2 lines.
2. **Badges & Tags in Flex Headers**: Texts like "⚡ Demo trước 0đ", "✨ Hiện đại & Rõ ràng" wrapped awkwardly into 2 lines ("Hiện đại & Rõ \n ràng") because `whiteSpace: 'nowrap'` and `flexShrink: 0` were missing.
3. **Card Header Layout**: Flex containers with `justifyContent: space-between` caused title and badge to crush each other on mobile.

## Golden Rules for Mobile Anti Text-Wrapping & Auto-Resize

### 1. Mobile Side-by-Side Buttons (`hero-cta-group`)
To fit two main action buttons cleanly on the SAME line on mobile without word drops:
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

@media (min-width: 640px) {
  .hero-cta-group {
    width: auto;
    gap: 1rem;
  }
  .hero-cta-group .btn-custom {
    flex: 0 0 auto;
  }
}
```

### 2. Badges & Tags in Header Flex Rows
Always apply `white-space: nowrap` and `flex-shrink: 0` to status tags, pills, and badges.
```tsx
<span
  style={{
    whiteSpace: 'nowrap',
    flexShrink: 0,
    fontSize: 'clamp(0.65rem, 2vw, 0.75rem)',
    padding: '0.25rem 0.6rem',
    borderRadius: 12
  }}
>
  <Sparkles size={12} /> Hiện đại &amp; Rõ ràng
</span>
```

### 3. Flex Container Safeguards (`min-width: 0` & `gap`)
For any flex parent carrying text and badges:
- Add `min-width: 0` to text parents to allow flex items to shrink gracefully.
- Add `whiteSpace: 'nowrap'` and font clamping to header titles: `fontSize: 'clamp(1rem, 3vw, 1.25rem)'`.
- Use `overflow: 'hidden'` and `textOverflow: 'ellipsis'` for truncated text fields (like URL bars or live notification text).

### 4. Filter Tab Buttons in Horizontal Scroll Containers
When creating horizontal scrolling filter tabs (`overflow-x: auto`), EVERY tab button MUST have:
- `whiteSpace: 'nowrap'`
- `flexShrink: 0`
Without `flexShrink: 0`, the first button (e.g. "Tất cả dự án (5)") will get crushed by flexbox into a narrow vertical line with text wrapped word-by-word!
```tsx
<button
  type="button"
  style={{
    whiteSpace: 'nowrap',
    flexShrink: 0,
    padding: '0.55rem 1.15rem',
    borderRadius: 'var(--radius-full)'
  }}
>
  Tất cả dự án ({count})
</button>
```

