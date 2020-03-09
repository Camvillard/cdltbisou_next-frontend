import { createGlobalStyle } from "styled-components";
import { themeColors } from "./theme";

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
    font-size: 1.6rem;
    color: ${themeColors.darkBlue};
  }

  img {
    max-width: 100%;
  }

  h3 {
    font-size: 3.2rem;
  }

  .accent {
    font-family: gemeli-mono, serif;
  }

  @media (min-width: 1024px) {
    h3 {
      font-size: 4.2rem;
    }
  }
`