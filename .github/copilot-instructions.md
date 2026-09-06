# Copilot instructions

## Project overview

This is a personal portfolio site that also serves as a resume. It will present the owner's professional experience, technical and general skills, hobbies, and contact information in a clear, easy-to-scan web interface. The site is built with React 19 and TypeScript using Create React App and `react-scripts` 5.

The browser entry point is `src/index.tsx`: it imports global styles, mounts `App` into the `#root` element from `public/index.html`, and wraps the app in `React.StrictMode`. `src/App.tsx` is the top-level page component and imports its component-specific stylesheet from `src/App.css`; site-wide resets and typography belong in `src/index.css`. As the resume content grows, keep the page structure and presentation organized around the main portfolio sections rather than leaving all content as an undifferentiated component.

Static files that are part of the compiled module graph, such as the starter SVG logo, live under `src/` and are imported by components. Files that must be referenced by URL or supplied as deployment metadata live under `public/` and are referenced with `%PUBLIC_URL%` in `public/index.html`. `src/reportWebVitals.ts` provides the optional CRA performance-reporting hook and is invoked by the entry point without a callback by default.

Tests are colocated with the code they exercise and use React Testing Library with CRA’s Jest environment. `src/setupTests.ts` loads the Jest DOM matchers.

## Commands

Run these from the repository root:

```text
npm start
npm run build
npm test
```

`npm start` serves the development app at `http://localhost:3000`. `npm run build` creates the production bundle in `build/`. `npm test` starts CRA’s interactive Jest watch mode.

For a non-interactive full test run:

```text
npm test -- --watchAll=false
```

To run one test file:

```text
npm test -- --watchAll=false --runTestsByPath src/App.test.tsx
```

To target a test by name, add Jest’s `--testNamePattern`, for example:

```text
npm test -- --watchAll=false --testNamePattern="renders learn react link"
```

There is no standalone lint script. CRA’s development/build tooling applies the configured `react-app` ESLint rules; use `npm run build` when a non-watch validation pass is needed.

## Repository conventions

- Keep the application composition in `App.tsx` and the mount/bootstrap logic in `index.tsx`; do not move browser setup into the page component.
- Keep global rules in `index.css` and component-scoped presentation in `App.css` (or a stylesheet next to the component). Preserve the existing class-based CSS approach unless the surrounding feature adopts another pattern.
- Use TypeScript for application and test files. The project uses strict type checking, `react-jsx`, ES module imports, and CRA’s `src`-only TypeScript include.
- Do not automatically create or expand tests during routine implementation. Only add tests when explicitly requested, and keep the `tests-coverage` workflow to simple unit tests using `@testing-library/react` queries against rendered behavior.
- Preserve CRA-compatible asset handling: import assets from `src` when they are module dependencies; use `public` for directly addressed static files and HTML metadata.
- Keep optional performance reporting disabled by default unless an explicit callback is passed to `reportWebVitals`.
- Follow the existing npm scripts and dependency versions in `package.json`; do not eject or replace the CRA toolchain as part of routine feature work.

## Repository skills

Repository-scoped workflows are defined in `.github/skills/`:

- `.github/skills/cip/SKILL.md` — commit completed changes and push to `dev` when the user explicitly asks for `CIP`.
- `.github/skills/tests-coverage/SKILL.md` — add simple focused unit tests when the user explicitly asks for `tests-coverage`.

Agents should load and follow the matching skill when the user invokes its trigger phrase.
