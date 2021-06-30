import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';


export const GlobalStyle = createGlobalStyle`

  ${normalize}
  
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;