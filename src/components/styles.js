import styled from 'styled-components';

export const StyledHeader = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const StyledInnerDiv = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 40px 25px 40px 25px;
`;

export const StyledIcon = styled.img`
  width: 153px;
  height: 20px;
`;

export const StyledInfoIcon = styled.img`
  width: 16.67px;
  height: 15px;
`;

export const StyledInfoDiv = styled.div`
  height: 20px;
  width: 208.67px;
  display: flex;
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
