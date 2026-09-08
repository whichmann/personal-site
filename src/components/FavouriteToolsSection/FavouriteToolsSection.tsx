import {
  AllToolsButton,
  FavouriteToolsSection,
  SectionFooter,
  SectionHeader,
  ToolDescription,
  ToolTitle,
  ToolTile,
  ToolsGrid,
} from './FavouriteToolsSection.components';
import {
  ALL_TOOLS_LABEL,
  FAVOURITE_TOOLS,
  FAVOURITE_TOOLS_SECTION_ARIA_LABEL,
  FAVOURITE_TOOLS_SECTION_LABEL,
} from './FavouriteToolsSection.consts';

function FavouriteTools() {
  return (
    <FavouriteToolsSection aria-label={FAVOURITE_TOOLS_SECTION_ARIA_LABEL}>
      <SectionHeader>{FAVOURITE_TOOLS_SECTION_LABEL}</SectionHeader>
      <ToolsGrid>
        {FAVOURITE_TOOLS.map((tool) => (
          <ToolTile key={tool.title}>
            <ToolTitle>{tool.title}</ToolTitle>
            <ToolDescription>{tool.description}</ToolDescription>
          </ToolTile>
        ))}
      </ToolsGrid>
      <SectionFooter>
        <AllToolsButton type="button">{ALL_TOOLS_LABEL}</AllToolsButton>
      </SectionFooter>
    </FavouriteToolsSection>
  );
}

export default FavouriteTools;
