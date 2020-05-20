import { createGlobalStyle } from "styled-components";
import { themeColors, themeBreakpoints, themeFonts } from "./theme";

const { darkBlue } = themeColors;
const { md, lg } = themeBreakpoints;
const { regular, accent } = themeFonts;

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    line-height: 1.25;
  }

  *, *:after, *:before {
    box-sizing: border-box;
  }

  body {
    font-family:${regular};
    font-size: 1.4rem;
    color: ${darkBlue};
    font-weight: 300;
  }

  img {
    max-width: 100%;
    object-fit: cover;
    display: block;
  }

  label, input, p, li, a, ul, ::placeholder {
    font-size: 1.4rem;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 1em auto 0.6em;
  }

  .accent {
    font-family:${accent};
  }

  @media (min-width: ${md}) {

    label, ::placeholder {
      font-size: 1.5rem;
    }

    input, p, li, a {
      font-size: 1.6rem;
    }
  }

  @media (min-width: ${lg}) {

    label, ::placeholder {
      font-size: 1.7rem;
    }

    input, p, li, a {
      font-size: 1.8rem;
    }

  }
`;
