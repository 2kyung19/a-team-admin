import styled from 'styled-components';

export const FilterBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 26.5625em) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
  }
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
