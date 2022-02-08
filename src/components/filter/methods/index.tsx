import {
  METHODS,
  methodFilterToggled,
  getMethodFilters,
} from 'slices/methodFiltersSlice';
import { openDropdown, resetDropdown } from 'slices/dropdownSlice';

import { useSelector, useDispatch } from 'react-redux';
import {
  toggleFilter,
  preventClickFromClosingDropdown,
  METHODS_FILTER_BUTTON_TEXT as BUTTON_TEXT,
} from 'components/filter/shared';

import * as S from 'components/filter/shared/styles';
import { RootState } from 'slices/store';

import DropdownArrow from 'assets/icons/DropdownArrow';

const MethodsFilter = () => {
  const dispatch = useDispatch();
  const dropdownStatus = useSelector(
    (state: RootState) => state.dropdown.status,
  );
  const activeMethodFilters = useSelector(getMethodFilters);
  const activeFiltersCount = activeMethodFilters.length;

  const buttonText =
    activeFiltersCount > 0
      ? `${BUTTON_TEXT}(${activeFiltersCount})`
      : BUTTON_TEXT;

  const toggleDropdown: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.stopPropagation();

    if (dropdownStatus === 'closed' || dropdownStatus === 'materials') {
      dispatch(openDropdown('methods'));
    } else {
      dispatch(resetDropdown());
    }
  };

  const renderedMethods = Object.keys(METHODS).map(method => {
    return (
      <S.FilterItem key={method}>
        <input
          type="checkbox"
          id={method}
          name={method}
          value={method}
          checked={activeMethodFilters.includes(METHODS[method])}
          onChange={toggleFilter(methodFilterToggled, dispatch)}
        />
        <label htmlFor={method}>{METHODS[method]}</label>
      </S.FilterItem>
    );
  });

  return (
    <S.Filter>
      <S.DropdownBtn
        type="button"
        active={activeMethodFilters.length > 0}
        onClick={toggleDropdown}>
        {buttonText}
        <DropdownArrow active={activeMethodFilters.length > 0} />
      </S.DropdownBtn>
      <S.FilterDropdown
        open={dropdownStatus === 'methods'}
        onClick={preventClickFromClosingDropdown}>
        {renderedMethods}
      </S.FilterDropdown>
    </S.Filter>
  );
};

export default MethodsFilter;
