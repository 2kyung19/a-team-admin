import styled, { keyframes } from 'styled-components';

export const StyledHeader = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.header};
  @media only screen and (max-width: 450px) {
    height: 44px;
  }
`;

const animatePosition = keyframes`
  from {left: -230px;} 
  to {left:0x;} 
`;

export const StyledEclipseWrapper = styled.button`
  display: none;
  @media only screen and (max-width: 450px) {
    display: inline-block;
    width: 18px;
    height: 12px;
    margin-left: 23px;
    display: flex;
    flex-direction: column;
  }
`;

export const StyledEclipse = styled.div`
  display: none;
  @media only screen and (max-width: 450px) {
    width: 18px;
    height: 2px;
    margin-bottom: 2px;
    background-color: white;
    display: inline-block;
  }
`;

export const StyledInnerDiv = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 40px 25px 40px 25px;
  @media only screen and (max-width: 450px) {
    width: 91.8px;
    height: 12px;
    margin: 16px 0px 16px 60px;
  }
`;

export const StyledIcon = styled.img`
  width: 153px;
  height: 20px;
  @media only screen and (max-width: 450px) {
    width: 100%;
    height: 100%;
  }
`;

export const StyledInfoIcon = styled.img`
  width: 16.67px;
  height: 15px;
`;

export const StyledInfoDiv = styled.div`
  height: 20px;
  width: 208.67px;
  display: flex;
  @media only screen and (max-width: 450px) {
    display: none;
  }
`;

export const StyledInfoInnerDiv = styled.div`
  margin-left: 8px;
  padding-right: 32px;
  width: 100px;
  color: white;
  font-size: 14px;
  border-right: 2px solid white;
`;

export const StyledInfoLogin = styled(StyledInfoInnerDiv)`
  margin-left: 32px;
  padding-right: 0px;
  width: 52px;
  border-right: none;
`;

export const StyledGreyBackground = styled.div<{ isClicked: boolean }>`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${animatePosition} 1s;

  display: ${props => {
    return props.isClicked ? 'flex' : 'none';
  }};
`;

export const StyledWhiteBgWrapper = styled.div`
  background-color: white;
  width: 280px;
  height: 100%;
  z-index: 20;
`;
export const StyledWhiteBgHeader = styled.div`
  border-bottom: 1px #e5e5e5 solid;
  height: 4.4rem;
`;
export const StyledEclipseIcon = styled.img`
  margin: 1.6rem 1.25rem;
`;

export const StyledWhiteBgBody = styled.div`
  padding-left: 3.2rem;
  margin-top: 3.6rem;
`;
