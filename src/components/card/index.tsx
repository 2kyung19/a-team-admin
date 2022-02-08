import * as S from 'components/card/styles';
import Title from 'components/card/title';
import CardInfo from 'components/card/info';
import CardBtn from 'components/card/btn';

interface Props {
  request: {
    id: number;
    title: string;
    client: string;
    due: string;
    count: number;
    amount: number;
    method: string[];
    material: string[];
    status: string;
  };
}

const Card = (props: Props): JSX.Element => {
  const {
    request: { status, title, client, due, count, amount, method, material },
  } = props;

  return (
    <S.Box>
      <S.Top>
        <Title status={status}>{title}</Title>
        <S.Customer>{client}</S.Customer>
        <S.DueDate>{due}까지 납기</S.DueDate>
      </S.Top>
      <S.Content>
        <CardInfo
          data={[
            `${count}개`,
            `${amount}개`,
            method.join(', '),
            material.join(', '),
          ]}
        />
        <CardBtn />
      </S.Content>
    </S.Box>
  );
};

export default Card;
