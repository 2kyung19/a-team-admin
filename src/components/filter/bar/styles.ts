import styled from 'styled-components';

export const FilterBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const DropdownFilters = styled.div`
  display: flex;

  & > div + div {
    margin-left: 0.8rem;
  }

  & > div + button {
    margin-left: 2.4rem;
  }
`;

export const ToggleFilter = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;
