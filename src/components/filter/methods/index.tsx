import { METHODS, methodFilterToggled } from 'slices/methodFiltersSlice';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFilter } from 'components/filter/shared';
import { useState } from 'react';
import { FilterDropdown, DropdownBtn } from 'components/filter/methods/styles';
import DropdownArrow from 'assets/icons/DropdownArrow';

const BUTTON_TEXT = '재료';

const MethodsFilter = () => {
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  const renderedMethods = Object.keys(METHODS).map(method => {
    return (
      <li key={method}>
        <input
          type="checkbox"
          id={method}
          name={method}
          value={method}
          onChange={toggleFilter(methodFilterToggled, dispatch)}
        />
        <label htmlFor={method}>{METHODS[method]}</label>
      </li>
    );
  });

  return (
    <>
      <DropdownBtn type="button" onClick={toggleDropdown}>
        {BUTTON_TEXT}
        <DropdownArrow />
      </DropdownBtn>
      <FilterDropdown open={dropdownOpen}>{renderedMethods}</FilterDropdown>
    </>
  );
};

export default MethodsFilter;
