import { createGlobalStyle } from "styled-components";
import Reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${Reset}
    * {
  box-sizing: border-box;
  }
  body {
    margin: 30px;
  }
  a {
    text-decoration: none;
  }
`;
