import styled from 'styled-components';

const Check = styled.input`
  position: relative;
  width: 3.4rem;
  height: 1.4rem;
  border-radius: 1.7rem;
  background-color: #c2c2c2;
  cursor: pointer;
  appearance: none;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -0.3rem;
    width: 2rem;
    height: 2rem;

    border-radius: 50%;
    background: #f5f5f5;
    box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.12),
      0 0.2rem 0.2rem rgba(0, 0, 0, 0.24);
    transition: ease 300ms;
  }

  &:checked {
    background-color: #bbdefb;

    &::before {
      background-color: ${props => props.theme.colors.primary};
      box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.12),
        0 0.2rem 0.2rem rgba(0, 0, 0, 0.24);
      transform: translate(2rem, -50%);
      transition: ease 300ms;
    }
  }
`;

const Label = styled.label`
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 500;

  cursor: pointer;
  color: ${props => props.theme.colors.gray3};
`;

export { Check, Label };
