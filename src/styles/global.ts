import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    user-select: none;
  }

  :focus-visible {
    outline: 0;   
  }

  body{
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -wekbit-font-smoothing: antialiased;

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }
    

  }

  body, input, button, p, span{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
  }

  ::-webkit-scrollbar{
    width: 6px;
    height: 6px;
  }
  
  ::-webkit-scrollbar-thumb{
    background: ${(props) => props.theme.yellow};
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover{
    background: ${(props) => props.theme['yellow-dark']};    
  }

@media (max-width: 1220px) {
    .headerContainer, .checkoutContainer, .mainSuccessContainer {
      flex-direction: column;
      align-items: center;
    }
}

@media(max-width: 840px){
  html{
    //12px
    font-size: 85.714%;
  }
}
@media(max-width: 768px){
  html{
    //10px
    font-size: 71.428%;
  }
}
@media(max-width: 620px){
  html{
    //8px
    font-size: 57.142%;
  }
}
@media(max-width: 480px){
  html{
    //6px
    font-size: 42.857%; 
  }
}
`
