import styled from 'styled-components';
import Card from 'components/card';
import { RequestType } from 'types/request';

interface Props {
  requests: RequestType[];
}

const CardContainer = ({ requests }: Props): JSX.Element => {
  return (
    <StyledCardContainer>
      {requests?.map((request: any) => {
        return (
          <GridItemWrapper>
            <Card request={request} />
          </GridItemWrapper>
        );
      })}
    </StyledCardContainer>
  );
};

const StyledCardContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 1.6rem;
  grid-template-columns: repeat(auto-fill, minmax(36.6rem, 1fr));
  justify-content: space-between;
  margin-bottom: 5rem;
`;

const GridItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 35.6rem;
`;

export default CardContainer;
