import styled from 'styled-components';
import Section from '../Section/Section';

const SummarySection = styled(Section)`
  grid-column: span 3;

  @media (max-width: 900px) {
    grid-column: span 1;
  }
`;

export default SummarySection;
