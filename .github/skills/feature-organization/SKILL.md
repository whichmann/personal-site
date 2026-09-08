---
name: feature-organization
description: Organize newly implemented features into isolated component folders, colocated constants, components, helpers, and shared utilities.
---

# Feature organization workflow

Use this skill whenever implementing a new feature or substantially refactoring an existing feature.

- Isolate meaningful UI components into `src/components/[component-name]/`.
- Put the component implementation in a matching file, for example `src/components/TopBar/TopBar.tsx`.
- Put static labels, descriptions, content collections, and other component-specific constants beside it in `[ComponentName].consts.ts`.
- Put helpers used only by a component beside it, for example `src/components/TopBar/TopBar.helpers.ts`.
- Put reusable helpers shared by multiple areas in `src/utils/utils.ts`.
- Put simple styled UI components and their exports in `[ComponentName].components.tsx`.
- Keep component-specific styles, types, tests, and assets colocated with the component when that improves discoverability.
- Keep `App.tsx` focused on page composition and wiring rather than accumulating all feature implementation details.
- Use PascalCase for component directory and component file names. Use the component name in helper filenames.
- Keep `[ComponentName].tsx` focused on rendering and interaction rather than inline static copy, data arrays, styled components, or reusable helper logic.
- Before adding a helper, check whether an existing component helper or shared utility already provides the needed behavior.
