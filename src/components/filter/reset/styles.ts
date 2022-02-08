import styled from 'styled-components';

export const Reset = styled.button<{ active: boolean }>`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.2rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;
