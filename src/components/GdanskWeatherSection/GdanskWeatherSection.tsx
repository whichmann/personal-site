import styled from 'styled-components';
import Section from '../Section/Section';

const GdanskWeatherSection = styled(Section)`
  grid-column: span 4;

  @media (max-width: 900px) {
    grid-column: span 2;
  }

  @media (max-width: 560px) {
    grid-column: span 1;
  }
`;

export default GdanskWeatherSection;
