import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --paper: #f3f0e7;
    --ink: #191611;
    --ink-soft: #615a4e;
    --accent: #b5341c;
    --rule: 1.5px solid var(--ink);
    --gap: 18px;
    --tile-pad: 18px;
    --hair: 1px solid color-mix(in srgb, var(--ink) 25%, transparent);
    --safe-top: env(safe-area-inset-top, 0px);

    font-family: 'Apfel Grotezk', sans-serif;
    color: var(--ink);
    background: var(--paper);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    min-width: 320px;
  }

  body {
    min-width: 320px;
    margin: 0;
    font-family: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyle;
