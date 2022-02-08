import React from 'react';
import * as S from 'components/card/btn/styles';

const CardBtn = (): JSX.Element => {
  return (
    <S.Box>
      <S.Btn color="primary">요청 내역 보기</S.Btn>
      <S.Btn color="white">채팅하기</S.Btn>
    </S.Box>
  );
};

export default CardBtn;
