import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: Roboto, Ubuntu, sans-serif;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    outline: none;
    padding: 0;
    margin: 0;
  }

  :root {
    --master-color: #484542;
  }

`;
