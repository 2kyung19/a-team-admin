import styled from 'styled-components';

export const StyledCardContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 1.6rem;
  grid-template-columns: repeat(auto-fill, minmax(36.6rem, 1fr));
  justify-content: space-between;
  margin-bottom: 5rem;
`;

export const GridItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 35.6rem;
`;
