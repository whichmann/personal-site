import styled from 'styled-components';
import Section from '../Section/Section';

export const SectionHeader = styled.header`
  padding: var(--tile-pad);
  border-bottom: var(--hair);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
`;

export const BooksGrid = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: minmax(120px, 1fr);

  @media (max-width: 560px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const BookButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--tile-pad);
  min-width: 0;
  min-height: 120px;
  padding: var(--tile-pad);
  border: 0;
  border-right: var(--hair);
  border-bottom: var(--hair);
  color: var(--ink);
  background: var(--paper);
  font: inherit;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.1;
  text-align: left;
  cursor: pointer;

  img {
    display: block;
    flex: 0 0 64px;
    width: 64px;
    height: 88px;
    object-fit: cover;
  }

  &:nth-child(2n) {
    border-right: 0;
  }

  &:nth-last-child(-n + 2) {
    border-bottom: 0;
  }

  &:hover,
  &:focus-visible {
    background-image: radial-gradient(
      circle at 3px 3px,
      color-mix(in srgb, var(--ink) 22%, transparent) 0.7px,
      transparent 0.78px
    );
    background-size: 6px 6px;
  }

  @media (max-width: 560px) {
    border-right: 0;

    &:nth-last-child(-n + 2) {
      border-bottom: var(--hair);
    }

    &:last-child {
      border-right: 0;
      border-bottom: 0;
    }
  }
`;

export const BookInfo = styled.span`
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 4px;
`;

export const BookTitle = styled.span`
  min-width: 0;
  font-weight: 400;
`;

export const BookAuthor = styled.span`
  min-width: 0;
  color: var(--ink-soft);
  font-size: 0.875rem;
  font-weight: 400;
`;

export const RecentBooksSection = styled(Section)`
  grid-column: span 2;

  @media (max-width: 900px) {
    grid-column: 1 / -1;
  }
`;
