import TopBar from './components/TopBar/TopBar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import styled from 'styled-components';

const SiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 1450px;
  margin: 0 auto;
  padding-inline: var(--gap);
`;

function App() {
  return (
    <SiteContainer>
      <TopBar />
      <Main />
      <Footer />
    </SiteContainer>
  );
}

export default App;
