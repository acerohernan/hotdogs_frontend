import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0
  }

  html{
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }

  ul{
    list-style:none;
  }

  a{
    text-decoration: none;
  }
`;
