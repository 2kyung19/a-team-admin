import * as S from 'components/container/filterContainer/styles';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const FilterContainer = ({ children }: Props): JSX.Element => {
  return <S.FilterWrapper>{children}</S.FilterWrapper>;
};

export default FilterContainer;
