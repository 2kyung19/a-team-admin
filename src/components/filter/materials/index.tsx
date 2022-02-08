import {
  MATERIALS,
  materialsFilterToggled,
} from 'slices/materialsFiltersSlice';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFilter } from 'components/filter/shared';
import { useState } from 'react';
import {
  FilterDropdown,
  DropdownBtn,
} from 'components/filter/materials/styles';
import DropdownArrow from 'assets/icons/DropdownArrow';

const BUTTON_TEXT = '가공방식';

const MaterialsFilter = () => {
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  const renderedMaterials = Object.keys(MATERIALS).map(material => {
    return (
      <li key={material}>
        <input
          type="checkbox"
          id={material}
          name={material}
          value={material}
          onChange={toggleFilter(materialsFilterToggled, dispatch)}
        />
        <label htmlFor={material}>{MATERIALS[material]}</label>
      </li>
    );
  });

  return (
    <>
      <DropdownBtn type="button" onClick={toggleDropdown}>
        {BUTTON_TEXT}
        <DropdownArrow />
      </DropdownBtn>
      <FilterDropdown open={dropdownOpen}>{renderedMaterials}</FilterDropdown>
    </>
  );
};

export default MaterialsFilter;
