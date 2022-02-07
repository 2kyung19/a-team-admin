import styled from 'styled-components';

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 16px;

  width: 366px;
  height: 356px;

  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.gray1};
  box-sizing: border-box;
  border-radius: 4px;

  @media only screen and (max-width: ${props => props.theme.media.mobile}px) {
    width: 320px;
    height: 344px;
  }

  &:hover {
    padding: 23px 15px;
    border: 2px solid ${props => props.theme.colors.primary};
  }
`;

const Top = styled.div`
  width: 100%;
  height: 108px;
  border-bottom: 1px solid ${props => props.theme.colors.gray1};

  margin: 0 0 32px 0;

  @media only screen and (max-width: ${props => props.theme.media.mobile}px) {
    height: 96px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: 168px;
`;

const Customer = styled.div`
  width: 51px;
  height: 20px;

  font-family: 'Noto Sans KR Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  color: ${props => props.theme.colors.gray3};
  margin: 4px 0 24px 0;

  @media only screen and (max-width: ${props => props.theme.media.mobile}px) {
    margin: 0 0 16px 0;
  }
`;

const DueDate = styled.div`
  width: 125px;
  height: 20px;

  font-family: 'Noto Sans KR Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: ${props => props.theme.colors.gray2};
`;

export { Box, Top, Content, Customer, DueDate };
