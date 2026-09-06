import { useState } from 'react';
import styled from 'styled-components';
import Section from '../Section/Section';
import { summaryItems } from './SummarySection.helpers';

const SummarySectionContainer = styled(Section)`
  grid-column: span 3;
  overflow: hidden;

  @media (max-width: 900px) {
    grid-column: span 1;
  }
`;

const Introduction = styled.h1`
  margin: 0;
  padding: var(--tile-pad);
  font-size: clamp(2rem, 4vw, 4.5rem);
  font-weight: 400;
  line-height: 0.98;
  letter-spacing: -0.04em;
`;

const Navigation = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 256px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavigationItem = styled.li<{
  $index: number;
  $selected: boolean;
  $hasSelection: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  border-top: var(--hair);
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  transform: translateY(
    ${({ $index, $selected, $hasSelection }) =>
      `${$hasSelection && $selected ? 0 : $index * 64}px`}
  );
  color: var(--ink);
  font-size: 1.125rem;
  font-weight: 700;
  opacity: ${({ $selected, $hasSelection }) =>
    !$hasSelection || $selected ? 1 : 0};
  pointer-events: ${({ $selected, $hasSelection }) =>
    !$hasSelection || $selected ? 'auto' : 'none'};
  transition:
    transform 300ms ease,
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

const NavigationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 64px;
  padding: var(--tile-pad);
  border: 0;
  color: inherit;
  background: transparent;
  font: inherit;
  font-weight: inherit;
  text-align: left;
  cursor: pointer;
`;

const PlusIcon = styled.span<{ $selected: boolean }>`
  display: inline-flex;
  width: 16px;
  height: 16px;
  color: var(--accent);
  transform: rotate(${({ $selected }) => ($selected ? '45deg' : '0deg')});
  transition: transform 160ms ease;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Details = styled.li`
  position: absolute;
  top: 64px;
  right: 0;
  bottom: 0;
  left: 0;
  border-top: var(--hair);
  margin: 0;
  padding: var(--tile-pad);
  list-style: none;
  color: var(--ink-soft);
  font-size: 1rem;
  line-height: 1.25;
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 220ms ease 120ms,
    transform 300ms ease;
`;

function SummarySection() {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const selectedItem = summaryItems.find((item) => item.id === selectedItemId);

  return (
    <SummarySectionContainer aria-label="Summary">
      <Introduction>
        Hi, I&apos;m <strong>Karol Wichmann</strong>. I write code, create
        products, run teams, watch stars, and sometimes create some music.
      </Introduction>
      <Navigation aria-label="Portfolio sections">
        {summaryItems.map((item, index) => (
          <NavigationItem
            key={item.id}
            $index={index}
            $selected={selectedItemId === item.id}
            $hasSelection={Boolean(selectedItemId)}
            aria-hidden={Boolean(selectedItemId && selectedItemId !== item.id)}
          >
            <NavigationButton
              type="button"
              tabIndex={
                selectedItemId && selectedItemId !== item.id ? -1 : undefined
              }
              aria-pressed={selectedItemId === item.id}
              aria-controls="summary-details"
              onClick={() =>
                setSelectedItemId((currentId) =>
                  currentId === item.id ? null : item.id
                )
              }
            >
              {item.label}
              <PlusIcon $selected={selectedItemId === item.id} aria-hidden="true">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M8 2.5v11M2.5 8h11" />
                </svg>
              </PlusIcon>
            </NavigationButton>
          </NavigationItem>
        ))}
        {selectedItem && (
          <Details id="summary-details">{selectedItem.description}</Details>
        )}
      </Navigation>
    </SummarySectionContainer>
  );
}

export default SummarySection;
