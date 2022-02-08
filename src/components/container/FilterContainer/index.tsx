import styled from 'styled-components';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const FilterContainer = ({ children }: Props): JSX.Element => {
  return <FilterWrapper>{children}</FilterWrapper>;
};

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.2rem;
`;

export default FilterContainer;
