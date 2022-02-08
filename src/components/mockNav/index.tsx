import styled from 'styled-components';

const Nav = (): JSX.Element => {
  return <Container>Mock nav | CAPA 파트너스</Container>;
};

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  height: 6rem;
  font-size: 2.5rem;
  color: #fff;
  font-family: 'Noto Sans KR';
  font-weight: 600;
  line-height: 1.5;
`;

export default Nav;
