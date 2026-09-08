import styled from 'styled-components';
import Section from '../Section/Section';

export const SectionHeader = styled.header`
  padding: var(--tile-pad);
  border-bottom: var(--hair);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
`;

export const ToolsGrid = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: minmax(120px, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const ToolTile = styled.article`
  display: flex;
  min-width: 0;
  min-height: 120px;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  padding: var(--tile-pad);
  border-right: var(--hair);
  border-bottom: var(--hair);
  color: var(--ink);
  background: var(--paper);

  &:nth-child(2n) {
    border-right: 0;
  }

  &:nth-last-child(-n + 2) {
    border-bottom: 0;
  }

  &:hover {
    background-image: radial-gradient(
      circle at 3px 3px,
      color-mix(in srgb, var(--ink) 22%, transparent) 0.7px,
      transparent 0.78px
    );
    background-size: 6px 6px;
  }

  @media (max-width: 900px) {
    border-right: 0;

    &:nth-last-child(-n + 2) {
      border-bottom: var(--hair);
    }

    &:last-child {
      border-bottom: 0;
    }
  }
`;

export const ToolTitle = styled.span`
  min-width: 0;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.1;
`;

export const ToolDescription = styled.span`
  min-width: 0;
  color: var(--ink-soft);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.2;
`;

export const SectionFooter = styled.footer`
  margin-top: auto;
  padding: var(--tile-pad);
  border-top: var(--hair);
`;

export const AllToolsButton = styled.button`
  padding: 0;
  border: 0;
  color: var(--accent);
  background: transparent;
  font: inherit;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-align: left;
  cursor: pointer;
`;

export const FavouriteToolsSection = styled(Section)`
  grid-column: span 2;

  @media (max-width: 900px) {
    grid-column: span 1;
  }
`;
