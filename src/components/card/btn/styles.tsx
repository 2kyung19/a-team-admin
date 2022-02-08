import styled from 'styled-components';

const Box = styled.div`
  display: flex;
`;

const Btn = styled.button<{ color: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 6px 12px;
  height: 32px;

  background-color: ${props => {
    if (props.color === 'primary') return props.theme.colors.primary;
    return props.theme.colors.white;
  }};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;

  font-family: 'Noto Sans KR Medium';
  font-size: 14px;
  font-style: normal;
  font-weight: 450;
  line-height: 20px;

  color: ${props => {
    if (props.color === 'primary') return props.theme.colors.white;
    return props.theme.colors.primary;
  }};

  margin: 0 10px 0 0;
`;

export { Box, Btn };
