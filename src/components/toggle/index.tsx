import React from 'react';
import * as S from 'components/toggle/styles';

interface prop {
  checked: boolean;
  onChange: () => void;
}

const Toggle = (Props: prop): JSX.Element => {
  const { checked, onChange } = Props;

  return (
    <S.Box>
      <S.CheckBox>
        <S.Check type="checkbox" onChange={onChange} checked={checked} />
      </S.CheckBox>
      <S.Text>상담 중인 요청만 보기</S.Text>
    </S.Box>
  );
};

export default Toggle;
