import styled from 'styled-components';

const Box = styled.div`
  width: 33.4rem;
  height: 2rem;

  @media only screen and (max-width: ${props => props.theme.media.mobile}em) {
    width: 28.8rem;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 0 0.8rem 0;
`;

const Title = styled.div`
  width: 7rem;
  height: 2rem;

  font-family: 'Noto Sans KR Regular';
  font-weight: 400;
  font-style: normal;
  font-size: 1.4rem;
  line-height: 1.4;

  color: ${props => props.theme.colors.gray3};
`;

const Data = styled.div`
  width: 23.2rem;
  height: 2rem;

  font-family: 'Noto Sans KR Bold';
  font-weight: 700;
  font-style: normal;
  font-size: 1.4rem;
  line-height: 1.4;

  color: ${props => props.theme.colors.gray3};
  @media only screen and (max-width: ${props => props.theme.media.mobile}em) {
    width: 18.6rem;
  }
`;

export { Box, Row, Title, Data };
