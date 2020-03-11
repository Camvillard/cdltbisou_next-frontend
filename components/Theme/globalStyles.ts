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
    object-fit: cover;
  }

  h3 {
    font-size: 3.2rem;
    margin: 1em auto 0.6em;
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