import React, { useState } from "react";
import {
  AllToolsButton,
  FavouriteToolsSection,
  SectionFooter,
  SectionHeader,
  ToolDescription,
  ToolIcon,
  ToolInfo,
  ToolTitle,
  ToolTile,
  ToolsPopup,
  ToolsPopupBackdrop,
  ToolsPopupClose,
  ToolsGrid,
} from "./FavouriteToolsSection.components";
import {
  ALL_TOOLS_LABEL,
  ALL_TOOLS_MESSAGE,
  FAVOURITE_TOOLS,
  FAVOURITE_TOOLS_SECTION_ARIA_LABEL,
  FAVOURITE_TOOLS_SECTION_LABEL,
} from "./FavouriteToolsSection.consts";

function FavouriteTools() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <FavouriteToolsSection aria-label={FAVOURITE_TOOLS_SECTION_ARIA_LABEL}>
      <SectionHeader>{FAVOURITE_TOOLS_SECTION_LABEL}</SectionHeader>
      <ToolsGrid>
        {FAVOURITE_TOOLS.map((tool) => (
          <ToolTile key={tool.title}>
            <ToolIcon
              src={`${process.env.PUBLIC_URL}/${tool.icon}`}
              alt=""
              aria-hidden="true"
            />
            <ToolInfo>
              <ToolTitle>{tool.title}</ToolTitle>
              <ToolDescription>{tool.description}</ToolDescription>
            </ToolInfo>
          </ToolTile>
        ))}
      </ToolsGrid>
      <SectionFooter>
        <AllToolsButton type="button" onClick={() => setIsPopupOpen(true)}>
          {ALL_TOOLS_LABEL}
        </AllToolsButton>
      </SectionFooter>
      {isPopupOpen && (
        <ToolsPopupBackdrop
          role="presentation"
          onClick={() => setIsPopupOpen(false)}
        >
          <ToolsPopup
            role="dialog"
            aria-modal="true"
            aria-label={ALL_TOOLS_MESSAGE}
            onClick={(event: React.MouseEvent<HTMLDivElement>) =>
              event.stopPropagation()
            }
          >
            <ToolsPopupClose
              type="button"
              aria-label="Close popup"
              onClick={() => setIsPopupOpen(false)}
            >
              ×
            </ToolsPopupClose>
            {ALL_TOOLS_MESSAGE}
          </ToolsPopup>
        </ToolsPopupBackdrop>
      )}
    </FavouriteToolsSection>
  );
}

export default FavouriteTools;
