import { useSelector } from 'react-redux';
import { AppDispatch } from 'slices/store';

export const toggleFilter =
  (func: Function, dispatch: AppDispatch) =>
  (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(func(e.target.value));
  };
