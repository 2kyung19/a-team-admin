import styled from 'styled-components';

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const DropdownBtn = styled.button<{ active: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 0.4rem;
  padding: 0.9rem 1.2rem;
  padding-right: 1.4rem;
  gap: 0.5rem;
  height: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  line-height: 1.4;
  font-weight: 500;

  color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.gray3};

  background-color: ${({ theme, active }) =>
    active ? theme.colors.blue : theme.colors.white};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const FilterDropdown = styled.ul<{ open: boolean }>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 3.6rem;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 0.4rem;
  padding: 1.7rem 1.2rem;
  width: 13rem;
  font-size: 1.4rem;
  gap: 0.8rem;
`;

export const FilterItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
`;
