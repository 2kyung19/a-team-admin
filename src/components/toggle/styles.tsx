import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  justify-content: space-between;

  width: 18.2rem;
  height: 2rem;
`;

const CheckBox = styled.div`
  position: relative;

  width: 4rem;
  height: 2rem;

  background-color: ${props => props.theme.colors.white};
`;

const Check = styled.input`
  position: relative;
  top: 0.3rem;
  left: 0.3rem;
  width: 3.4rem;
  height: 1.4rem;

  border-radius: 1.7rem;
  background-color: #c2c2c2;

  appearance: none;

  &::before {
    content: '';
    position: absolute;
    top: -0.3rem;
    left: -0.3rem;
    width: 2rem;
    height: 2rem;

    border-radius: 1.5rem;
    background: #f5f5f5;
    box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.12),
      0 0.2rem 0.2rem rgba(0, 0, 0, 0.24);
    transition: ease 300ms;
  }

  &:checked {
    background-color: #bbdefb;

    &::before {
      background-color: ${props => props.theme.colors.primary};
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12),
        0px 2px 2px rgba(0, 0, 0, 0.24);
      transform: matrix(-1, 0, 0, 1, 0, 0);
      transform: translateX(2rem);
      transition: ease 300ms;
    }
  }
`;

const Text = styled.div`
  width: 12.6rem;
  height: 2rem;

  font-family: 'Noto Sans KR Medium';
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.6;

  color: ${props => props.theme.colors.gray3};
`;

export { Box, CheckBox, Check, Text };
