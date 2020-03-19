import { createGlobalStyle } from "styled-components";
import { themeColors, themeBreakpoints } from "./theme";

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  *, *:after, *:before {
    box-sizing: border-box;
  }

  body {
    font-family: objektiv-mk1, sans-serif;
    font-size: 1.4rem;
    color: ${themeColors.darkBlue};
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }

  label, input, p, li, a, ul, ::placeholder {
    font-size: 1.4rem;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 1em auto 0.6em;
  }

  h1 {
    font-size: 4.8rem;
  }

  h2 {
    font-size: 4rem;
  }

  h3 {
    font-size: 3.2rem;
  }

  .accent {
    font-family: gemeli-mono, serif;
  }

  @media (min-width: ${themeBreakpoints.md}) {

    h1 {
      font-size: 5.6rem;
    }

    h2 {
      font-size: 4.8rem;
    }

    h3 {
      font-size: 4rem;
    }

    label, ::placeholder {
      font-size: 1.5rem;
    }

    input, p, li, a {
      font-size: 1.6rem;
    }
  }

  @media (min-width: ${themeBreakpoints.lg}) {

    label, ::placeholder {
      font-size: 1.7rem;
    }

    input, p, li, a {
      font-size: 1.8rem;
    }

    h1 {
      font-size: 6.4rem;
    }

    h2 {
      font-size: 5.6rem;
    }

    h3 {
      font-size: 4.8rem;
    }


  }
`;
