import styled from 'styled-components';

export const StyledCardContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 1.6rem;
  grid-template-columns: repeat(auto-fill, minmax(36.6rem, 1fr));
  justify-content: space-between;
  margin-bottom: 5rem;

  @media screen and (max-width: ${props => props.theme.media.mobile}rem) {
    display: block;
  }
`;

export const GridItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 35.6rem;

  &:nth-child(2n + 1) {
    @media screen and (max-width: ${props => props.theme.media.girdLarge}rem) {
      justify-content: flex-start;
    }
    @media screen and (max-width: ${props => props.theme.media.girdMedium}rem) {
      justify-content: center;
    }
  }

  &:nth-child(2n) {
    @media screen and (max-width: ${props => props.theme.media.girdLarge}rem) {
      justify-content: flex-end;
    }
    @media screen and (max-width: ${props => props.theme.media.girdMedium}rem) {
      justify-content: center;
    }
  }
`;
