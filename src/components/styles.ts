import styled, { keyframes } from 'styled-components';

export const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2.5rem 4rem;
  background-color: ${({ theme }) => theme.colors.header};
  @media only screen and (max-width: 450px) {
    padding: 1.6rem 0rem 1.6rem 2.3rem;
  }
`;

export const StyledEclipseWrapper = styled.button`
  display: none;
  @media only screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledEclipse = styled.div`
  display: none;
  @media only screen and (max-width: 450px) {
    width: 1.8rem;
    height: 0.2rem;
    background-color: white;
    display: inline-block;
    margin-bottom: 0.2rem;
  }
`;

export const StyledInnerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const StyledIcon = styled.img`
  @media only screen and (max-width: 450px) {
    margin-left: 1.9rem;
  }
`;

export const StyledInfoDiv = styled.div`
  display: flex;
  @media only screen and (max-width: 450px) {
    display: none;
  }
`;

export const StyledEclipseIcon = styled.img``;

export const StyledInfoInnerDiv = styled.div`
  margin-left: 0.8rem;
  padding-right: 3.2rem;
  color: white;
  font-size: 1.4rem;
  border-right: 2px solid white;
`;

export const StyledInfoLogin = styled.div`
  margin-left: 3.2rem;
  color: white;
  font-size: 1.4rem;
`;

export const StyledInfoIcon = styled.img`
  width: 1.66rem;
  height: 1.5rem;
  @media only screen and (max-width: 450px) {
    width: 1.66rem;
    margin-right: 0.8rem;
  }
`;

const animatePosition = keyframes`
  from {left: -230px;} 
  to {left:0x;} 
`;

export const StyledGreyBackground = styled.div<{ isClicked: boolean }>`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  display: ${props => {
    return props.isClicked ? 'flex' : 'none';
  }};
`;

export const StyledWhiteBgWrapper = styled.div`
  background-color: white;
  width: 28rem;
  z-index: 20;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  animation: ${animatePosition} 0.5s;
`;
export const StyledWhiteBgHeader = styled.div`
  border-bottom: 1px #e5e5e5 solid;
  padding: 1.6rem 0rem 1.6rem 2rem;
  height: 4.4rem;
`;

export const StyledWhiteBgBodyIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledWhiteBgBodyContainer = styled.div`
  padding: 3.6rem 0rem 0rem 3.2rem;
`;

export const StyledWhiteBgBody = styled.div`
  margin-bottom: 2.4rem;
  font-size: 1.4rem;
`;
