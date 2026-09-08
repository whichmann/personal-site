import styled from 'styled-components';
import Section from '../Section/Section';

export const WeatherSection = styled(Section)`
  grid-column: span 4;
  flex-direction: row;
  min-height: 220px;
  max-height: 360px;

  @media (max-width: 900px) {
    grid-column: span 2;
  }

  @media (max-width: 560px) {
    grid-column: span 1;
    flex-direction: column;
    min-height: 260px;
  }
`;

export const WeatherCopy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  min-width: 0;
  padding: var(--tile-pad);
  border-right: var(--hair);

  p {
    margin: 0;
    font-size: clamp(1rem, 1.7vw, 1.35rem);
    font-weight: 500;
    line-height: 1.05;
    letter-spacing: -0.025em;
  }

  @media (max-width: 560px) {
    width: 100%;
    padding-bottom: 12px;
    border-right: 0;
    border-bottom: var(--hair);
  }
`;

export const WeatherField = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
  min-height: 220px;
  max-height: 360px;
  overflow: hidden;
  touch-action: none;
  background-color: var(--paper);
  background-image: radial-gradient(
    circle at 3px 3px,
    color-mix(in srgb, var(--ink) 25%, transparent) 0.75px,
    transparent 0.85px
  );
  background-size: 7px 7px;

  canvas {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 220px;
  }

  @media (max-width: 560px) {
    min-height: 190px;
    max-height: 300px;

    canvas {
      min-height: 190px;
    }
  }
`;

export const WeatherDev = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  max-width: calc(100% - 20px);
  padding: 6px;
  border: var(--hair);
  background: var(--paper);
  opacity: 0;
  pointer-events: none;

  &.is-open {
    opacity: 1;
    pointer-events: auto;
  }

  button,
  input {
    border: 1px solid var(--ink);
    color: var(--ink);
    background: var(--paper);
    font-size: 10px;
  }

  button {
    padding: 2px 5px;
    cursor: pointer;
  }

  button.is-on {
    color: var(--paper);
    background: var(--ink);
  }
`;
