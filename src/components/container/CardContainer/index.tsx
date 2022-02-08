import Card from 'components/card';
import * as S from 'components/container/CardContainer/styles';
import { RequestType } from 'types/request';

interface Props {
  requests: RequestType[];
}

const CardContainer = ({ requests }: Props): JSX.Element => {
  return (
    <S.StyledCardContainer>
      {requests?.map((request: any) => {
        return (
          <S.GridItemWrapper key={request.id}>
            <Card request={request} />
          </S.GridItemWrapper>
        );
      })}
    </S.StyledCardContainer>
  );
};

export default CardContainer;
