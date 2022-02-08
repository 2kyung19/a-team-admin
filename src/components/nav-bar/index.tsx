import React, { useState } from 'react';
import * as S from './styles';

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
          <S.StyledIcon src={require('assets/images/icon.png')} alt="icon" />
          <S.StyledInfoDiv>
            <S.StyledInfoIcon
              src={require('assets/images/producer-icon.png')}
              alt="infoIcon"
            />
            <S.StyledInfoInnerDiv>A가공업체</S.StyledInfoInnerDiv>
            <S.StyledInfoLogin>{LOGIN_STATUS}</S.StyledInfoLogin>
          </S.StyledInfoDiv>
        </S.StyledInnerDiv>
      </S.StyledHeader>
      <S.StyledGreyBackground
        isClicked={isClicked}
        onClick={() => {
          setIsClicked(!isClicked);
        }}>
        <S.StyledWhiteBgWrapper
          onClick={event => {
            event.stopPropagation();
          }}>
          <S.StyledWhiteBgHeader>
            <S.StyledEclipseIcon
              src={require('assets/images/eclipseIcon.png')}
              alt="eclipse-Icon"
            />
          </S.StyledWhiteBgHeader>
          <S.StyledWhiteBgBodyContainer>
            <S.StyledWhiteBgBodyIconWrapper>
              <S.StyledInfoIconWhite
                src={require('assets/images/whiteMenuIcon.png')}
                alt="white-Menu-Icon"
              />
              <S.StyledWhiteBgBody>파트너정밀가공</S.StyledWhiteBgBody>
            </S.StyledWhiteBgBodyIconWrapper>
            <S.StyledWhiteBgBody>{LOGIN_STATUS}</S.StyledWhiteBgBody>
          </S.StyledWhiteBgBodyContainer>
        </S.StyledWhiteBgWrapper>
      </S.StyledGreyBackground>
    </div>
  );
};

export default Header;
