import "sanitize.css";
import css from "@emotion/css";

export const globalStyles = css`
  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  .App {
    padding: 20px;
  }

  body.fontLoaded {
    font-family: sans-serif;
  }
`;
