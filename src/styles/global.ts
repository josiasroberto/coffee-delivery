import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  :focus-visible {
    outline: 0;   
  }

  body{
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -wekbit-font-smoothing: antialiased;
  }

  body, input, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
  }

`
