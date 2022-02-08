import { AppDispatch } from 'slices/store';
import { openDropdown, resetDropdown } from 'slices/dropdownSlice';

export const toggleFilter =
  (func: Function, dispatch: AppDispatch) =>
  (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(func(e.target.value));
  };

export const preventClickFromClosingDropdown: React.MouseEventHandler<
  HTMLUListElement
> = e => {
  e.stopPropagation();
};

export const toggleDropdown = (
  dropdownStatus: string,
  dispatch: AppDispatch,
) => {
  const toggle: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.stopPropagation();

    if (dropdownStatus === 'closed' || dropdownStatus === 'methods') {
      dispatch(openDropdown('materials'));
    } else {
      dispatch(resetDropdown());
    }
  };
  return toggle;
};

export const MATERIALS_FILTER_BUTTON_TEXT = '재료';
export const METHODS_FILTER_BUTTON_TEXT = '가공방식';
export const RESET_BUTTON_TEXT = '필터링 리셋';
