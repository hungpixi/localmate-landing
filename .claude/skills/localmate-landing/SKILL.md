```markdown
# localmate-landing Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the `localmate-landing` repository, a TypeScript codebase with no detected framework. You'll learn about file naming, import/export styles, commit conventions, and testing patterns, ensuring consistency and maintainability in your contributions.

## Coding Conventions

### File Naming
- Use **snake_case** for all file names.
  - Example:  
    ```
    user_profile.ts
    main_page.test.ts
    ```

### Import Style
- Use **relative imports** for referencing other modules.
  - Example:
    ```typescript
    import { getUser } from './user_utils';
    ```

### Export Style
- Use **named exports** exclusively.
  - Example:
    ```typescript
    // In user_utils.ts
    export function getUser(id: string) { ... }

    // Importing
    import { getUser } from './user_utils';
    ```

### Commit Message Convention
- Follow **conventional commits** with the `docs` prefix for documentation changes.
  - Example:
    ```
    docs: update README with setup instructions
    ```

## Workflows

_No automated workflows detected in this repository._

## Testing Patterns

- Test files use the pattern `*.test.*` (e.g., `main_page.test.ts`).
- The testing framework is **unknown**; check existing test files for structure and style.
- Example test file name:
  ```
  user_profile.test.ts
  ```

## Commands
| Command      | Purpose                                  |
|--------------|------------------------------------------|
| /format      | Format code according to conventions     |
| /test        | Run all test files                       |
| /commit-docs | Commit documentation changes             |
| /lint        | Lint the codebase for style consistency  |

```