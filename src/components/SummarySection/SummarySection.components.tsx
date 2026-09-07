import styled from 'styled-components';
import Section from '../Section/Section';

export const SummarySectionContainer = styled(Section)`
  grid-column: span 3;
  overflow: hidden;

  @media (max-width: 900px) {
    grid-column: span 1;
  }
`;

export const Introduction = styled.h1`
  margin: 0;
  padding: var(--tile-pad);
  font-size: clamp(1.2rem, 4vw, 3.5rem);
  font-weight: 400;
  line-height: 0.98;
  letter-spacing: -0.04em;
`;

export const Navigation = styled.ul`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavigationItem = styled.li<{
  $index: number;
  $selected: boolean;
  $hasSelection: boolean;
}>`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
  border-top: var(--hair);
  grid-column: 1;
  grid-row: ${({ $index, $hasSelection }) =>
    $hasSelection ? 1 : $index + 1};
  font-size: clamp(0.75rem, calc(0.4rem + 1vw), 0.875rem);
  color: var(--ink);
  font-weight: 700;
  opacity: ${({ $selected, $hasSelection }) =>
    !$hasSelection || $selected ? 1 : 0};
  pointer-events: ${({ $selected, $hasSelection }) =>
    !$hasSelection || $selected ? 'auto' : 'none'};
  transition:
    opacity 220ms ease,
    color 160ms ease,
    background-color 160ms ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: var(--paper);
      background: var(--ink);
    }
  }
`;

export const NavigationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--tile-pad);
  padding: 12px 16px;
  width: 100%;
  height: 100%;
  min-height: 64px;
  border: 0;
  color: inherit;
  background: transparent;
  font: inherit;
  font-weight: inherit;
  text-align: left;
  cursor: pointer;
`;

export const NavigationImageFrame = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 2px;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  aspect-ratio: 1;
  flex-shrink: 0;
  border: var(--hair);
  overflow: hidden;
  background: var(--paper);
`;

export const NavigationImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  object-fit: contain;
  border-radius: inherit;
`;

export const NavigationLabel = styled.span`
  flex: 1;
`;

export const PlusIcon = styled.span<{ $selected: boolean }>`
  display: inline-flex;
  width: 16px;
  height: 16px;
  color: var(--accent);
  transform: rotate(${({ $selected }) => ($selected ? '45deg' : '0deg')});
  transition: transform 160ms ease;
  margin-right: var(--tile-pad);

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Details = styled.li`
  position: relative;
  grid-column: 1;
  grid-row: 2;
  border-top: var(--hair);
  margin: 0;
  padding: var(--tile-pad);
  list-style: none;
  color: var(--ink-soft);
  font-size: 1.125rem;
  line-height: 1.25;
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 220ms ease 120ms,
    transform 300ms ease;
`;
