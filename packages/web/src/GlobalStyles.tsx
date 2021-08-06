import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'TTNorms-Bold';
    src: url('assets/fonts/TypeType\ -\ TT\ Norms\ Pro\ Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'TTNorms-Light';
    src: url('assets/fonts/TypeType\ -\ TT\ Norms\ Pro\ Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'TTNorms-Regular';
    src: url('assets/fonts/TypeType\ -\ TT\ Norms\ Pro\ Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'TTNorms-Medium';
    src: url('assets/fonts/TypeType\ -\ TT\ Norms\ Pro\ Medium.ttf') format('truetype');
  }

  html, body {
    background: #f5f5fb 0 0 no-repeat padding-box;
    margin: 0;
  }
`;

export default GlobalStyles;
