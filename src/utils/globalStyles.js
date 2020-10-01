import { css, Global } from "@emotion/core";

export const globalStyles = (
  <Global
    styles={css`
      html {
        font-size: 16px;

        @media screen and (min-width: 900px) {
          font-size: 18px;
        }

        @media screen and (min-width: 1200px) {
          font-size: 20px;
        }
      }

      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        letter-spacing: 0.3px;
        font-family: "Open Sans", sans-serif;
      }

      a {
        text-decoration: none;
        cursor: pointer;
        color: inherit;
      }
    `}
  />
);
