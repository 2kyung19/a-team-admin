import styled from 'styled-components';

const Box = styled.div`
  width: 334px;
  height: 20px;

  @media only screen and (max-width: ${props => props.theme.media.mobile}px) {
    width: 288px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 0 8px 0;
`;

const Title = styled.div`
  width: 70px;
  height: 20px;

  font-family: 'Noto Sans KR Regular';
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;

  color: ${props => props.theme.colors.gray3};
`;

const Data = styled.div`
  width: 232px;
  height: 20px;

  font-family: 'Noto Sans KR Bold';
  font-weight: 700;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;

  color: ${props => props.theme.colors.gray3};
  @media only screen and (max-width: ${props => props.theme.media.mobile}px) {
    width: 186px;
  }
`;

export { Box, Row, Title, Data };
