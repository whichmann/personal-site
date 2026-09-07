import styled from 'styled-components';
import Section from '../Section/Section';

const SectionHeader = styled.header`
  padding: var(--tile-pad);
  border-bottom: var(--hair);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
`;

const RecentBooksSection = styled(Section)`
  grid-column: span 2;

  @media (max-width: 900px) {
    grid-column: span 1;
  }
`;

function RecentBooks() {
  return (
    <RecentBooksSection aria-label="Recent books">
      <SectionHeader>RECENT BOOKS</SectionHeader>
    </RecentBooksSection>
  );
}

export default RecentBooks;
