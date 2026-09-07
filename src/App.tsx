import TopBar from './components/TopBar/TopBar';
import Main from './components/Main/Main';
import styled from 'styled-components';

const SiteContainer = styled.div`
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
    </SiteContainer>
  );
}

export default App;
