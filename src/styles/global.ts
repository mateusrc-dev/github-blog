import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${props => props.theme.blue};
  }

  body {
    background-color: ${props => props.theme['base-background']};
    color: ${props => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Nunito, sans-serif;
    color: ${props => props.theme['base-text']};
    font-weight: 400;
    line-height: 1.6;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme['base-text']};
  }
`