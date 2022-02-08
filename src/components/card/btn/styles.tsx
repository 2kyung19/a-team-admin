import styled from 'styled-components';

const Box = styled.div`
  display: flex;
`;

const Btn = styled.button<{ color: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 0.6rem 1.2rem;
  height: 3.2rem;

  background-color: ${props => {
    if (props.color === 'primary') return props.theme.colors.primary;
    return props.theme.colors.white;
  }};
  border: 0.1rem solid ${props => props.theme.colors.primary};
  border-radius: 0.4rem;

  font-family: 'Noto Sans KR Medium';
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 450;
  line-height: 1.4;

  color: ${props => {
    if (props.color === 'primary') return props.theme.colors.white;
    return props.theme.colors.primary;
  }};

  margin: 0 1rem 0 0;

  &:active {
    filter: brightness(80%);
  }
`;

export { Box, Btn };
