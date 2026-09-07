import styled from 'styled-components';
import Section from '../Section/Section';

const SectionHeader = styled.header`
  padding: var(--tile-pad);
  border-bottom: var(--hair);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
`;

const SectionFooter = styled.footer`
  margin-top: auto;
  padding: var(--tile-pad);
  border-top: var(--hair);
`;

const AllToolsButton = styled.button`
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

const FavouriteToolsSection = styled(Section)`
  grid-column: span 2;

  @media (max-width: 900px) {
    grid-column: span 1;
  }
`;

function FavouriteTools() {
  return (
    <FavouriteToolsSection aria-label="Favourite tools">
      <SectionHeader>FAVOURITE TOOLS</SectionHeader>
      <SectionFooter>
        <AllToolsButton type="button">ALL TOOLS →</AllToolsButton>
      </SectionFooter>
    </FavouriteToolsSection>
  );
}

export default FavouriteTools;
