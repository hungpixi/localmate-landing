# QUY TẮC GIT CHO ĐỘI NGŨ SUBAGENT CODE

Để đảm bảo các AI subagent làm việc song song không xảy ra xung đột mã nguồn (merge conflicts) hoặc ghi đè code của nhau, bắt buộc phải tuân thủ quy tắc quản lý nhánh dưới đây:

---

## 1. Phân Chia Nhánh Cho Từng Agent

Mỗi agent chỉ được phép commit và push trên nhánh làm việc tương ứng của mình:

| Mã Agent | Tên Vai Trò | Nhánh Git Phụ Trách |
| :---: | :--- | :--- |
| **01** | Lead Architect & Technical Coordinator | `agent/01-architecture` |
| **02** | Database Architect & Integrity Engineer | `agent/02-database` |
| **03** | Backend API & Business Logic Engineer | `agent/03-backend` |
| **04** | Authentication, RBAC & Security Engineer | `agent/04-security` |
| **05** | Frontend Foundation & Design System | `agent/05-frontend-foundation` |
| **06** | Frontend: Company, Product, Supplier Page | `agent/06-company-product` |
| **07** | Frontend: Readiness, Roadmap, Dashboard | `agent/07-readiness-roadmap` |
| **08** | Document, R2 & Background Workflows | `agent/08-storage-workflows` |
| **09** | Cloudflare DevOps, CI/CD & Observability | `agent/09-cloudflare-devops` |
| **10** | QA, Integration & Release Gatekeeper | `agent/10-qa-release` |

---

## 2. Quy Chuẩn Commit Messages (Conventional Commits)

Không sử dụng các commit chung chung như "update code", "fix bug". Commit message phải tuân thủ định dạng:
*   `feat(products): add product creation API`
*   `fix(readiness): preserve draft answers`
*   `refactor(database): add tenant indexes`
*   `test(auth): prevent cross-organization access`
*   `chore(cloudflare): configure staging bindings`
*   `docs(architecture): document upload workflow`

---

## 3. Quy Trình Gộp Code (Merge Workflow)

1.  Agent hoàn thành tính năng trên nhánh của mình và chạy test thành công.
2.  Tạo Pull Request (PR) gửi về nhánh `main` hoặc nhánh tích hợp chung.
3.  **Agent 01 (Lead Architect)** và **Agent 10 (QA Gatekeeper)** kiểm định PR.
4.  Sau khi được duyệt (Approve) và merge, các agent khác chạy `git pull` để đồng bộ hóa local code trước khi bắt đầu công việc tiếp theo.
