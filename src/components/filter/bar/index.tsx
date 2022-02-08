import MaterialsFilter from 'components/filter/materials';
import MethodsFilter from 'components/filter/methods';
import ResetButton from 'components/filter/reset';
import Toggle from 'components/filter/toggle';

import * as S from 'components/filter/bar/styles';

const FilterBar = () => {
  return (
    <S.FilterBar>
      <S.DropdownFilters>
        <MethodsFilter />
        <MaterialsFilter />
        <ResetButton />
      </S.DropdownFilters>
      <S.ToggleFilter>
        <Toggle />
      </S.ToggleFilter>
    </S.FilterBar>
  );
};

export default FilterBar;
