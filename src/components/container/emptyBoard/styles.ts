import styled from 'styled-components';

export const StyledEmptyBoard = styled.div`
  ${props => props.theme.Wrapper}
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10rem;
  border: 0.1rem solid ${props => props.theme.colors.gray_1};
  border-radius: 0.4rem;
  color: ${props => props.theme.colors.gray2};
  font-size: 1.4rem;
  font-family: 'Noto Sans KR';
  font-weight: 400;
  line-height: 1.42;
`;
