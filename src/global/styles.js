import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        box-sizing: border-box;
        background: #f1f1f5;
    }
    *, *::before, *::after {
      box-sizing: inherit;
;
  }
`;
