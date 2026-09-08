import styled from "styled-components";
import GdanskNow from "../GdanskWeatherSection/GdanskNow";

const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap);
  width: 100%;
  min-height: 34px;
  margin-bottom: var(--gap);
  padding: var(--safe-top) var(--gap) 0;
  border: var(--rule);
  background: var(--paper);

  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;
    padding: 8px var(--gap) 6px;
  }
`;

const Name = styled.span`
  font-size: 1.125em;
  line-height: 1;
  white-space: nowrap;
  color: var(--ink);
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 0.12em;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap);
  color: var(--ink-soft);
  font-size: 0.875rem;
  line-height: 1;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: .12em;

  @media (max-width: 560px) {
    gap: 10px;
    font-size: 9px;
  }
`;

const GdanskNowDisplay = styled(GdanskNow)`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  .wx {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .wx-icon {
    display: inline-flex;
  }
`;

function TopBar() {
  return (
    <Container>
      <Name>KAROL WICHMANN</Name>
      <Details>
        <span>GDAŃSK, PL</span>
        <GdanskNowDisplay />
      </Details>
    </Container>
  );
}

export default TopBar;
