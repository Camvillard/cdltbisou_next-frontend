import Link from 'next/link';
import { FooterContainer, FooterLinks, FooterLink, FooterRow } from "./Footer.ui";


const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterRow>
          <FooterLink>
            <Link href="#">
              <a>contact</a>
            </Link>
          </FooterLink>

          <FooterLink>/</FooterLink>

          <FooterLink>
            <Link href="#">
              <a>à propos</a>
            </Link>
          </FooterLink>

        </FooterRow>

        <FooterRow>
          <FooterLink>
            <Link href="#">
              <a>cartes</a>
            </Link>
          </FooterLink>

          <FooterLink>/</FooterLink>

          <FooterLink>
            <Link href="#">
              <a>affiches</a>
            </Link>
          </FooterLink>

          <FooterLink>/</FooterLink>

          <FooterLink>
            <Link href="#">
              <a>calendrier</a>
            </Link>
          </FooterLink>
        </FooterRow>

      </FooterLinks>

    </FooterContainer>
  )
}

export default Footer;