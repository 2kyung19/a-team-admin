import {
  getMaterialFilters,
  MATERIALS,
  materialsFilterToggled,
} from 'slices/materialsFiltersSlice';

import { openDropdown, resetDropdown } from 'slices/dropdownSlice';

import { useSelector, useDispatch } from 'react-redux';
import {
  toggleFilter,
  MATERIALS_FILTER_BUTTON_TEXT as BUTTON_TEXT,
} from 'components/filter/shared';
import * as S from 'components/filter/shared/styles';
import DropdownArrow from 'assets/icons/DropdownArrow';
import { RootState } from 'slices/store';

const MaterialsFilter = () => {
  const dispatch = useDispatch();
  const dropdownStatus = useSelector((state: RootState) => state.dropdown);
  const activeMaterialFilters = useSelector(getMaterialFilters);

  const toggleDropdown: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.stopPropagation();

    if (dropdownStatus === 'closed' || dropdownStatus === 'methods') {
      dispatch(openDropdown('materials'));
    } else {
      dispatch(resetDropdown());
    }
  };

  const preventClickFromClosingDropdown: React.MouseEventHandler<
    HTMLUListElement
  > = e => {
    e.stopPropagation();
  };

  const renderedMaterials = Object.keys(MATERIALS).map(material => {
    return (
      <S.FilterItem key={material}>
        <input
          type="checkbox"
          id={material}
          name={material}
          value={material}
          checked={activeMaterialFilters.includes(MATERIALS[material])}
          onChange={toggleFilter(materialsFilterToggled, dispatch)}
        />
        <label htmlFor={material}>{MATERIALS[material]}</label>
      </S.FilterItem>
    );
  });

  return (
    <S.Filter>
      <S.DropdownBtn
        type="button"
        active={activeMaterialFilters.length > 0}
        onClick={toggleDropdown}>
        {BUTTON_TEXT}
        <DropdownArrow active={activeMaterialFilters.length > 0} />
      </S.DropdownBtn>
      <S.FilterDropdown
        open={dropdownStatus === 'materials'}
        onClick={preventClickFromClosingDropdown}>
        {renderedMaterials}
      </S.FilterDropdown>
    </S.Filter>
  );
};

export default MaterialsFilter;
