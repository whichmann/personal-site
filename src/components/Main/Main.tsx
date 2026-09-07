import styled from 'styled-components';
import FavouriteToolsSection from '../FavouriteToolsSection/FavouriteToolsSection';
import GdanskWeatherSection from '../GdanskWeatherSection/GdanskWeatherSection';
import PhotoSection from '../PhotoSection/PhotoSection';
import RecentBooksSection from '../RecentBooksSection/RecentBooksSection';
import SummarySection from '../SummarySection/SummarySection';

const MainLayout = styled.main`
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-rows: minmax(96px, auto);
  grid-auto-flow: dense;
  gap: var(--gap);
  display: grid;
  width: 100%;
  margin-bottom: var(--gap);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

function Main() {
  return (
    <MainLayout>
      <PhotoSection />
      <SummarySection />
      <RecentBooksSection aria-label="Recent books" />
      <FavouriteToolsSection aria-label="Favourite tools" />
      <GdanskWeatherSection aria-label="Gdańsk weather" />
    </MainLayout>
  );
}

export default Main;
