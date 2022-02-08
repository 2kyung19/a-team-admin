import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Text = styled.div`
  width: 12.5rem;
  height: 2.4rem;

  font-family: 'Noto Sans KR Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.5;

  color: ${props => props.theme.colors.gray3};
`;

const Tag = styled.div<{ status: string }>`
  display: ${props => {
    if (props.status === '상담중') return 'flex';
    return 'none';
  }};
  flex-direction: column;
  align-items: center;
  padding: 0.2rem 0.8rem;

  width: 5rem;
  height: 2.4rem;

  background: ${props => props.theme.colors.white};
  border: 0.1rem solid ${props => props.theme.colors.yellow};
  box-sizing: border-box;
  border-radius: 1.2rem;

  font-family: 'Noto Sans KR Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.6;

  color: ${props => props.theme.colors.yellow};
`;

export { Box, Text, Tag };
