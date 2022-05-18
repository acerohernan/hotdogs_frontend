import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0
  }

  html{
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
  }

  body{
    @media(min-width: 640px){
    background-color: #1B1A17;
    padding: 20px 0;
  }
  }

  ul{
    list-style:none;
  }

  a{
    text-decoration: none;
    cursor: pointer;
  }
  button{
    cursor: pointer;
  }

`;
