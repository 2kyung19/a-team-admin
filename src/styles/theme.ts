import { css } from 'styled-components';

const colors = {
  black: '#000000',
  white: '#ffffff',
  gray_1: '#c2c2c2',
  gray: '#ccc',
  header: '#1565C0',
  gray1: '#e5e5e5',
  gray2: '#939fa5',
  gray3: '#323D45',
  primary: '#2196f3',
  yellow: '#FFA000',
  blue: '#1565C0',
};

const media = {
  mobile: 28.75,
  girdLarge: 75,
  girdMedium: 50.31,
};

const WrapSize = '1130px';

const Wrapper = css`
  margin: 0 auto;
  max-width: ${WrapSize};
  width: 100%;
`;

const theme = {
  Wrapper,
  colors,
  media,
};

export default theme;
