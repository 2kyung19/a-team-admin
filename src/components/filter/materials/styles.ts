import styled from 'styled-components';

export const DropdownBtn = styled.button`
  border: 1px solid #939fa5;
  border-radius: 4px;
  padding: 4px 12px;
  padding-right: 8px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // 추후에 rem으로 바꿀 예정
`;

export const FilterDropdown = styled.ul<{ open: boolean }>`
  display: ${({ open }) => (open ? 'block' : 'none')};
`;
