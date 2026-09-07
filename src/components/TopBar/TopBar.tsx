import { useEffect, useState } from "react";
import styled from "styled-components";
import { formatWarsawTime } from "./TopBar.helpers";

const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap);
  width: 100%;
  min-height: 64px;
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

const Weather = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const SunIcon = () => (
  <svg
    aria-label="Sunny"
    role="img"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="square"
    width="16"
    height="16"
  >
    <circle cx="8" cy="8" r="2.6" fill="currentColor" stroke="none" />
    <path d="M8 1.6v1.8M8 12.6v1.8M1.6 8h1.8M12.6 8h1.8M3.3 3.3l1.3 1.3M11.4 11.4l1.3 1.3M3.3 12.7l1.3-1.3M11.4 4.6l1.3-1.3" />
  </svg>
);

function TopBar() {
  const [currentTime, setCurrentTime] = useState(formatWarsawTime);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(formatWarsawTime());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <Container>
      <Name>KAROL WICHMANN</Name>
      <Details>
        <span>GDAŃSK, PL</span>
        <span>{currentTime}</span>
        <Weather>
          <SunIcon />
          <span>24°C</span>
        </Weather>
      </Details>
    </Container>
  );
}

export default TopBar;
