import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-rows: repeat(3, auto);
  width: 100%;
  margin-top: auto;
  border: var(--rule);
`;

export const FooterRow = styled.div`
  display: flex;
  align-items: center;
  min-height: 52px;
  padding: var(--tile-pad);
  border-bottom: var(--hair);
  color: var(--ink-soft);
  font-weight: 800;
  letter-spacing: 0.2em;
  font-size: 11.5px;
`;

export const FooterLinksRow = styled(FooterRow)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding: 0;

  @media (max-width: 560px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 10px;
  }
`;

export const FooterLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 52px;
  padding: var(--tile-pad);
  gap: 12px;
  color: var(--ink);
  font-size: 0.95rem;
  font-weight: 650;
  text-decoration: none;

  &:first-child {
    border-right: var(--hair);
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover,
    &:focus-visible {
      color: var(--paper);
      background: var(--ink);
    }

    &:first-child:hover img,
    &:first-child:focus-visible img {
      filter: brightness(0) invert(1);
    }
  }

  @media (max-width: 560px) {
    &:first-child {
      border-right: 0;
    }
  }
`;

export const FooterLinkHandle = styled.span`
  color: var(--ink-soft);
`;

export const FooterLinkIcon = styled.img`
  display: block;
  width: 20px;
  height: 20px;
  object-fit: contain;
`;

export const FooterLinkService = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

export const FooterCopyrightRow = styled(FooterRow)`
  border-bottom: 0;
  color: var(--ink-soft);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: 11.5px;
  font-weight: 700;
`;
