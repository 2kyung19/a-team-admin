import styled from 'styled-components';

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.4rem 1.6rem;
  width: 36.6rem;
  height: 35.6rem;
  background-color: ${props => props.theme.colors.white};
  border: 0.1rem solid ${props => props.theme.colors.gray1};
  border-radius: 0.4rem;
  cursor: pointer;

  @media only screen and (max-width: ${props => props.theme.media.mobile}em) {
    width: 32rem;
    height: 34.4rem;
  }

  &:hover {
    padding: 2.3rem 1.5rem;
    border: 0.2rem solid ${props => props.theme.colors.primary};
  }
`;

const Top = styled.div`
  width: 100%;
  height: 10.8rem;
  margin: 0 0 3.2rem 0;
  border-bottom: 0.1rem solid ${props => props.theme.colors.gray1};

  @media only screen and (max-width: ${props => props.theme.media.mobile}em) {
    height: 9.6rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: 16.8rem;
`;

const Customer = styled.div`
  width: 5.1rem;
  height: 2rem;

  font-family: 'Noto Sans KR';
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.4;

  color: ${props => props.theme.colors.gray3};
  margin: 0.4rem 0 2.4rem 0;

  @media only screen and (max-width: ${props => props.theme.media.mobile}em) {
    margin: 0 0 1.6rem 0;
  }
`;

const DueDate = styled.div`
  width: 12.5rem;
  height: 2rem;

  font-family: 'Noto Sans KR';
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.4;

  color: ${props => props.theme.colors.gray2};
`;

export { Box, Top, Content, Customer, DueDate };
