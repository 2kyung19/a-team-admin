import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Text = styled.div`
  width: 125px;
  height: 24px;

  font-family: 'Noto Sans KR Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: ${props => props.theme.colors.gray3};
`;

const Tag = styled.div<{ status: string }>`
  display: ${props => {
    if (props.status === '상담중') return 'flex';
    return 'none';
  }};
  flex-direction: column;
  align-items: center;
  padding: 2px 8px;

  width: 50px;
  height: 24px;

  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.yellow};
  box-sizing: border-box;
  border-radius: 12px;

  font-family: 'Noto Sans KR Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;

  color: ${props => props.theme.colors.yellow};
`;

export { Box, Text, Tag };
