# Rule 14 — Micro-Commits & 15-Minute Rule (Git Workflow)
Never write code for more than 15 minutes without making a local commit. Follow the "Verified-First" Git workflow:

1. **The 15-Minute Checkpoint**: Break features into tiny executable chunks. If you code for 15 minutes, you must reach a verifiable state. If the code works and tests pass -> `git add` & `git commit`. 
2. **Never Commit Broken States**: If you hit 15 minutes and the code is fundamentally broken, either stash the changes (`git stash`) or revert to the last commit to rethink the approach. Do not commit failing code.
3. **Local First, Remote Later**: Commit locally and frequently. Only `git push` to GitHub when a COMPLETE, end-to-end feature is finalized and functionally tested. Avoid pushing half-baked logic to the remote branch.
4. **Descriptive, Actionable Messages**: Use conventional commits (`feat:`, `fix:`, `refactor:`, `chore:`). The message must explain the *WHY* and *WHAT*, so we can trace the logic back if a rollback is needed.
