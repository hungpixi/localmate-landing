# Lesson: Vietnamese Diacritics Font Rendering & Form Input Typography

**Date:** 2026-07-22
**Category:** Typography / Font Encoding / Form Inputs

## Problem Identified
When users typed Vietnamese text with diacritics into form input fields (e.g. "Thiết kế Web", "Nguyễn Văn Hùng", "Thủ Đức"):
1. Font links from Google Fonts missing heavy weights (`800`, `900`) caused browsers to synthesize fake bold font layers, resulting in broken Vietnamese accent glyphs or question marks `?` in terminal inputs.
2. `<input>`, `<textarea>`, `<select>`, `<button>` elements in browsers do not automatically inherit `font-family` from `<body>` unless explicitly configured.

## Golden Rules for Vietnamese Typography & Input Fields

### 1. Full Google Fonts Weights Import (`index.html`)
Always import all weights (300 to 900) for `Be Vietnam Pro` (or any Vietnamese primary font):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&display=swap" rel="stylesheet">
```

### 2. Mandatory Input Font Inheritance (`globals.css`)
In global CSS, force all form inputs, buttons, textareas, and selects to inherit `var(--font-family)`:
```css
button, input, textarea, select {
  font-family: var(--font-family) !important;
  font-size: inherit;
  color: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### 3. Explicit `fontFamily` in React Input Styles
When defining inline styles for form inputs in React components, always specify `fontFamily: 'var(--font-family)'`.
