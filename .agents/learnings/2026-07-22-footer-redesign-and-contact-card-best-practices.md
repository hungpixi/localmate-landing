# Lesson: High-Converting Footer Redesign & Contact Card Best Practices

**Date:** 2026-07-22
**Category:** Layout & Footer / Contact UX / Mobile Anti-Overflow

## Context & Improvement Goal
The Footer on mobile had several usability & visual issues:
- Contact details were plain text lines (`Hotline: 0988.xxx.888` placeholder).
- Copyright bottom text broke awkwardly into multi-line fragments (`( phamphunguyenhung.com \n - GitHub: @hungpixi )`).
- Logo did not have clean contrast background on deep navy footer.

## Standard Solution Implemented

### 1. Direct Action Contact Cards (Interactive Contact Block)
Instead of plain un-clickable text lines, convert contact options into interactive card buttons with hover feedback:
```tsx
{/* Phone / Zalo Button */}
<a
  href={CONTACT_INFO.zaloUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="footer-contact-card"
>
  <div style={{ width: 34, height: 34, borderRadius: '50%', backgroundColor: 'var(--color-teal)' }}>
    <Phone size={18} color="#ffffff" />
  </div>
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.65)' }}>Hotline / Zalo hỗ trợ 24/7</span>
    <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-orange)' }}>
      {CONTACT_INFO.phoneDisplay}
    </span>
  </div>
</a>
```

### 2. Logo Container Badge
Wrap white-background logos in a clean, rounded badge container (`backgroundColor: '#ffffff'`, `padding: '6px 14px'`, `borderRadius: '12px'`) so the logo asset presents cleanly on dark navy footers without ugly asset borders.

### 3. Credit Line Anti-Wrapping & Delimiters
In the bottom bar, enforce `whiteSpace: 'nowrap'` on external link elements and use subtle vertical pipe `|` or dot `·` separators instead of wrapping parentheses:
```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
  <span>Phát triển &amp; Triển khai bởi <strong style={{ color: '#ffffff' }}>hungpixi</strong></span>
  <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>|</span>
  <a href="http://phamphunguyenhung.com/" style={{ whiteSpace: 'nowrap' }}>phamphunguyenhung.com</a>
  <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>·</span>
  <a href="https://github.com/hungpixi/" style={{ whiteSpace: 'nowrap' }}>GitHub: @hungpixi</a>
</div>
```
