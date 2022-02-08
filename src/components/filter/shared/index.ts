import { AppDispatch } from 'slices/store';

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

export const MATERIALS_FILTER_BUTTON_TEXT = '재료';
export const METHODS_FILTER_BUTTON_TEXT = '가공방식';
export const RESET_BUTTON_TEXT = '필터링 리셋';
