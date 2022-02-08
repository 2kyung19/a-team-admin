import React from 'react';
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
  const { request } = props;

  return (
    <S.Box>
      <S.Top>
        <Title status={request.status}>{request.title}</Title>
        <S.Customer>{request.client}</S.Customer>
        <S.DueDate>{request.due}까지 납기</S.DueDate>
      </S.Top>
      <S.Content>
        <CardInfo
          data={[
            `${request.count}개`,
            `${request.amount}개`,
            request.method.join(', '),
            request.material.join(', '),
          ]}
        />
        <CardBtn />
      </S.Content>
    </S.Box>
  );
};

export default Card;
