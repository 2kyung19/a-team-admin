import { useSelector, useDispatch } from 'react-redux';
import {
  toggleFilter,
  preventClickFromClosingDropdown,
  toggleDropdown,
  MATERIALS_FILTER_BUTTON_TEXT as BUTTON_TEXT,
} from 'components/filter/shared';
import DropdownArrow from 'assets/icons/DropdownArrow';

// style-related
import * as S from 'components/filter/shared/styles';

// slice-related
import { RootState } from 'slices/store';
import {
  getMaterialFilters,
  MATERIALS,
  materialsFilterToggled,
} from 'slices/materialsFiltersSlice';

const MaterialsFilter = () => {
  const dispatch = useDispatch();
  const dropdownStatus: string = useSelector(
    (state: RootState) => state.dropdown.status,
  );
  const activeMaterialFilters = useSelector(getMaterialFilters);

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
        onClick={toggleDropdown(dropdownStatus, dispatch)}>
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
