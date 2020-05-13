import { Fragment } from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";
// import Page from '../components/Page/Page.component';

import "../helpers/styles/styles.scss";
import { theme } from "../components/Theme/theme";
import { GlobalStyles } from "../components/Theme/globalStyles";

type TPageProps = {
  query?: any;
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps: TPageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default MyApp;
