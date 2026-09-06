import styled from 'styled-components';
import PhotoSection from '../PhotoSection/PhotoSection';
import SummarySection from '../SummarySection/SummarySection';

const MainLayout = styled.main`
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(96px, auto);
  grid-auto-flow: dense;
  gap: var(--gap);
  margin: 0 auto var(--gap);
  display: grid;
  width: calc(100% - (var(--gap) * 2));
  max-width: 1550px;
`;

function Main() {
  return (
    <MainLayout>
      <PhotoSection aria-label="Photo placeholder" />
      <SummarySection aria-label="Summary placeholder" />
    </MainLayout>
  );
}

export default Main;
