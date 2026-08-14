# Bug Memory & Lessons Learned

## 1. Bài học về Quản lý Agent & Prompting
- **Không nhồi nhét rules dự án khác**: Tránh copy-paste các rules backend B2B (Prisma, Tanstack, Flue) vào dự án landing page đơn giản vì sẽ làm Agent bị ngộ độc context và kẹt vòng lặp.
- **Tránh Spawn quá nhiều Subagents trên 1 Frontend**: 10 subagents cùng sửa 1 repo frontend gây xung đột git và file lock. Nên dùng 1 Agent chính giải quyết tuần tự theo module hoặc tối đa 2 subagent chạy 2 trang độc lập.
- **Rule 14 Verified-First**: Sau mỗi cụm module hoặc 15 phút, chạy `npm run build` và commit local ngay.
