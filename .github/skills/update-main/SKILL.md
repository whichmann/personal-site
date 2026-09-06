---
name: update-main
description: Create and merge a pull request from dev into main without deleting the dev branch when the user explicitly asks to update main.
---

# Update-main workflow

Use this skill when the user explicitly asks to `update-main` or asks to update `main` from `dev`.

1. Confirm the repository is clean or identify the user's intended changes before starting.
2. Confirm that `dev` exists and contains commits that are not yet in `main`.
3. Push the current `dev` branch if it has unpushed commits and the user has requested the update.
4. Create a pull request from `dev` into `main`.
5. Use a concise PR title and description that accurately summarize the changes.
6. Wait for required checks and review protections as applicable.
7. Merge the pull request into `main` using the repository's allowed merge method.
8. Confirm that `main` contains the merge and that `dev` still exists.

Never delete `dev` after merging. Do not force-push, rewrite branch history, bypass required checks, or merge unrelated changes. If branch protection, required reviews, checks, authentication, or permissions prevent the operation, report the exact blocker instead of bypassing it.

## Required access

The agent needs authenticated access to the repository with permission to:

- Read repository contents and branches
- Create pull requests
- Merge pull requests into `main`
- Push `dev` when it contains local commits that need publishing

GitHub MCP tools are optional; an authenticated GitHub CLI or equivalent repository integration is sufficient.

