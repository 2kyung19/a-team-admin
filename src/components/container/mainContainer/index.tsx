import styled from 'styled-components';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const MainContainer = ({ children }: Props): JSX.Element => {
  return (
    <StyledContainer>
      <Header>
        <Title>{WORDS.title}</Title>
        <SubTitle>{WORDS.subTitle}</SubTitle>
      </Header>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  ${props => props.theme.Wrapper}
  margin-top: 4rem;
`;

const Header = styled.div`
  margin-bottom: 3.2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-family: 'Noto Sans KR Bold';
  font-weight: 600;
  line-height: 1.6;
  color: ${props => props.theme.colors.gray3};
`;

const SubTitle = styled.h3`
  font-family: 'Noto Sans KR Regular';
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${props => props.theme.colors.gray3};
`;

const WORDS = {
  title: '들어온 요청',
  subTitle: '파트너님께 딱 맞는 요청서를 찾아보세요.',
};

export default MainContainer;
