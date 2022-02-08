import React from 'react';
import * as S from 'components/card/info/styles';

interface props {
  data: Array<string>;
}

const CardInfo = (Props: props): JSX.Element => {
  const { data } = Props;

  return (
    <S.Box>
      {title.map((t, i) => (
        <S.Row key={t}>
          <S.Title>{t}</S.Title>
          <S.Data>{data[i]}</S.Data>
        </S.Row>
      ))}
    </S.Box>
  );
};

const title = ['도면개수', '총 수량', '가공방식', '재료'];

export default CardInfo;
