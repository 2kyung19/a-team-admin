import MaterialsFilter from 'components/filter/materials';
import MethodsFilter from 'components/filter/methods';
import StatusFilter from 'components/filter/status';

import * as S from 'components/filter/bar/styles';

const FilterBar = () => {
  return (
    <S.FilterBar>
      <MaterialsFilter />
      <MethodsFilter />
      <StatusFilter />
    </S.FilterBar>
  );
};

export default FilterBar;
