import React from 'react';
import * as S from 'components/card/title/styles';

interface prop {
  status: string;
  children: string;
}

const Title = (Props: prop): JSX.Element => {
  const { status, children } = Props;

  return (
    <S.Box>
      <S.Text>{children}</S.Text>
      <S.Tag status={status}>{status}</S.Tag>
    </S.Box>
  );
};

export default Title;
