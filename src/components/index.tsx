import React, { useState } from 'react';
import * as S from './styles';
// import handleClick from './function';

const LOGIN_STATUS = '로그아웃';

const Header = (): JSX.Element => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <S.StyledHeader>
        <S.StyledEclipseWrapper
          onClick={() => {
            setIsClicked(!isClicked);
          }}>
          <S.StyledEclipse />
          <S.StyledEclipse />
          <S.StyledEclipse />
        </S.StyledEclipseWrapper>
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
      <S.StyleGreyBackground
        isClicked={isClicked}
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      />
    </div>
  );
};

export default Header;
