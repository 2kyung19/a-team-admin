import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const styles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }
`;

const GlobalStyles = createGlobalStyle` 
    ${reset};
    ${styles};
`;

export default GlobalStyles;
