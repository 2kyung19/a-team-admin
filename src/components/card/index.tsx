import React from 'react';
import * as S from 'components/card/styles';
import Title from 'components/card/title';
import CardInfo from 'components/card/info';
import CardBtn from 'components/card/btn';

interface props {
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

const Card = (Props: props): JSX.Element => {
  const { request } = Props;

  return (
    <S.Box>
      <S.Top>
        <Title status={request.status}>비행기 시제품 제작</Title>
        <S.Customer>A 고객사</S.Customer>
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
