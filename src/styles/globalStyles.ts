import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

// prettier로 createGlobalStyle은 포맷이 안 됨
// styled-components의 css를 활용해 문제 해결

const styles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
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

  ul,
  ol,
  li {
    list-style: none;
  }
`;

const GlobalStyles = createGlobalStyle` 
    ${reset};
    ${styles};
`;

export default GlobalStyles;
