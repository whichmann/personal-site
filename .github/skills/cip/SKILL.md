---
name: cip
description: Commit completed repository changes and push them to the dev branch when the user explicitly asks for "CIP".
---

# CIP commit-push workflow

Use this skill only when the user explicitly asks for `CIP`.

1. Review the completed changes and repository status.
2. Ensure the target branch is `dev`; switch to it without discarding changes if necessary.
3. Stage the relevant completed changes.
4. Create a commit with a subject using exactly one of these prefixes:
   - `feat: short description`
   - `fix: short description`
   - `style: short description`
   - `chore: short description`
5. Push the commit to the remote `dev` branch.

Choose the prefix that best matches the change. Keep the description concise. Do not commit unrelated user changes, secrets, generated dependencies, or build output.

