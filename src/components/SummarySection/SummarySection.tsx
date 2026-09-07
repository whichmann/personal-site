import { useState } from 'react';
import { summaryItems } from './SummarySection.helpers';
import {
  Details,
  Introduction,
  Navigation,
  NavigationButton,
  NavigationImage,
  NavigationImageFrame,
  NavigationItem,
  NavigationLabel,
  PlusIcon,
  SummarySectionContainer,
} from './SummarySection.components';

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
        {summaryItems.map((item, index) => {
          const isSelected = selectedItemId === item.id;

          return (
            <NavigationItem
              key={item.id}
              $index={index}
              $selected={isSelected}
              $hasSelection={Boolean(selectedItemId)}
              aria-hidden={Boolean(selectedItemId && !isSelected)}
            >
              <NavigationButton
                type="button"
                tabIndex={selectedItemId && !isSelected ? -1 : undefined}
                aria-pressed={isSelected}
                aria-controls="summary-details"
                onClick={() =>
                  setSelectedItemId((currentId) =>
                    currentId === item.id ? null : item.id
                  )
                }
              >
                {item.imageSrc && (
                  <NavigationImageFrame>
                    <NavigationImage
                      src={`${process.env.PUBLIC_URL}${item.imageSrc}`}
                      alt={`${item.label} logo`}
                    />
                  </NavigationImageFrame>
                )}
                <NavigationLabel>{item.label}</NavigationLabel>
                <PlusIcon $selected={isSelected} aria-hidden="true">
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
          );
        })}
        {selectedItem && (
          <Details id="summary-details">{selectedItem.description}</Details>
        )}
      </Navigation>
    </SummarySectionContainer>
  );
}

export default SummarySection;
