import MaterialsFilter from 'components/filter/materials';
import MethodsFilter from 'components/filter/methods';
// import StatusFilter from 'components/filter/status';
import ResetButton from 'components/filter/reset';

import * as S from 'components/filter/bar/styles';

const testActive = true;

const FilterBar = () => {
  return (
    <S.FilterBar>
      <MethodsFilter />
      <MaterialsFilter />
      <ResetButton active={testActive} />
    </S.FilterBar>
  );
};

export default FilterBar;
