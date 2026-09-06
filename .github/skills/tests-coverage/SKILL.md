---
name: tests-coverage
description: Add simple unit tests for requested behavior when the user explicitly asks for "tests-coverage".
---

# Tests-coverage workflow

Use this skill only when the user explicitly asks for `tests-coverage`.

Add only straightforward, focused unit tests for the requested behavior. For this repository:

- Use React Testing Library and Jest through the existing Create React App test runner.
- Prefer colocated `*.test.tsx` files near the source under test.
- Query rendered behavior rather than implementation details.
- Keep the test set small and focused.
- Do not introduce integration tests, browser automation, snapshots, or broad coverage suites unless the user explicitly requests them.
- Run the targeted test file with:

```text
npm test -- --watchAll=false --runTestsByPath path/to/file.test.tsx
```

