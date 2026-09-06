import styled from 'styled-components';
import Section from '../Section/Section';

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
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavigationItem = styled.li`
  z-index: 1;
  border-top: var(--hair);
  flex: 1 1 0;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 64px;
  padding: var(--tile-pad);
  color: var(--ink);
  font-size: 1.125rem;
  font-weight: 700;
  transition:
    color 160ms ease,
    background-color 160ms ease;

  &:hover {
    color: var(--paper);
    background: var(--ink);
  }
`;

function SummarySection() {
  return (
    <SummarySectionContainer aria-label="Summary">
      <Introduction>
        Hi, I&apos;m <strong>Karol Wichmann</strong>. I write code, create
        products, run teams, watch stars, and sometimes create some music.
      </Introduction>
      <Navigation aria-label="Portfolio sections">
        <NavigationItem>Experience</NavigationItem>
        <NavigationItem>Skills</NavigationItem>
        <NavigationItem>Hobbies</NavigationItem>
        <NavigationItem>Contact</NavigationItem>
      </Navigation>
    </SummarySectionContainer>
  );
}

export default SummarySection;
