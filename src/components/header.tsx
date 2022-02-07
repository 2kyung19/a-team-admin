import React from 'react';
import * as S from './styles';

const LOGIN_STATUS = '로그아웃';
const Header = (): JSX.Element => {
  return (
    <S.StyledHeader>
      <S.StyledInnerDiv>
        <S.StyledIcon src="https://i.ibb.co/M85H48c/icon.png" alt="icon" />
        <S.StyledInfoDiv>
          <S.StyledInfoIcon
            src="https://i.ibb.co/8YzKN3t/producer-icon.png"
            alt="infoIcon"
          />
          <S.StyledInfoInnerDiv>A가공업체</S.StyledInfoInnerDiv>
          <S.StyledInfoLogin>{LOGIN_STATUS}</S.StyledInfoLogin>
        </S.StyledInfoDiv>
      </S.StyledInnerDiv>
    </S.StyledHeader>
  );
};

export default Header;
