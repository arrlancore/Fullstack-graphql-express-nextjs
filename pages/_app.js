import "typeface-open-sans";
import "typeface-titillium-web";
import NextApp from "next/app";
import { CacheProvider } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from "emotion";

import { theme } from "src/utils";
import { globalStyles } from "src/utils/globalStyles";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CacheProvider value={cache}>
        {globalStyles}
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    );
  }
}
