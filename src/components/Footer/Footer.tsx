import {
  FooterContainer,
  FooterCopyrightRow,
  FooterLink,
  FooterLinkHandle,
  FooterLinkIcon,
  FooterLinkService,
  FooterLinksRow,
  FooterRow,
} from './Footer.components';
import { FOOTER_AUTHOR, FOOTER_LABEL, FOOTER_LINKS } from './Footer.consts';

function Footer() {
  return (
    <FooterContainer>
      <FooterRow>{FOOTER_LABEL}</FooterRow>
      <FooterLinksRow>
        {FOOTER_LINKS.map((link) => (
          <FooterLink
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            <FooterLinkService>
              <FooterLinkIcon
                src={`${process.env.PUBLIC_URL}/${link.icon}`}
                alt=""
                aria-hidden="true"
              />
              <span>{link.label}</span>
            </FooterLinkService>
            <FooterLinkHandle>{link.handle}</FooterLinkHandle>
          </FooterLink>
        ))}
      </FooterLinksRow>
      <FooterCopyrightRow>
        @{new Date().getFullYear()} {FOOTER_AUTHOR}
      </FooterCopyrightRow>
    </FooterContainer>
  );
}

export default Footer;
