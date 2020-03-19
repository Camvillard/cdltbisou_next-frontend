import styled from "styled-components";
import { themeBreakpoints, themeColors } from "../Theme/theme";

export const FooterContainer = styled.footer``;

export const FooterLinks = styled.div`
  text-align: center;
`;
export const FooterRow = styled.div`
  margin: 4px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${themeBreakpoints.md}) {
    margin: 12px auto;
  }

  @media (min-width: ${themeBreakpoints.lg}) {
    margin: 18px auto;
  }
`;
export const FooterLink = styled.span`
  margin: 4px 2px;
  font-size: 2.2rem;
  font-weight: 800;
  a {
    font-size: 2.2rem;
    font-weight: 800;
    text-decoration: none;
    color: ${themeColors.darkBlue};
    padding: 4px;
  }

  a:hover {
    background: ${themeColors.darkBlue};
    color: white;
  }

  @media (min-width: ${themeBreakpoints.xsm}) {
    font-size: 2.6rem;
    a {
      font-size: 2.6rem;
    }
  }

  @media (min-width: ${themeBreakpoints.sm}) {
    font-size: 4.8rem;
    a {
      font-size: 4.8rem;
    }
  }

  @media (min-width: ${themeBreakpoints.md}) {
    font-size: 6.2rem;
    a {
      font-size: 6.2rem;
    }
  }

  @media (min-width: ${themeBreakpoints.lg}) {
    font-size: 8.4rem;
    a {
      font-size: 8.4rem;
    }
  }

  @media (min-width: ${themeBreakpoints.xl}) {
    font-size: 9.2rem;
    a {
      font-size: 9.2rem;
    }
  }
`;
