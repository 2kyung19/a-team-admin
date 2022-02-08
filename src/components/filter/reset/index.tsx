import Refresh from 'assets/icons/Refresh';
import { RESET_BUTTON_TEXT as BUTTON_TEXT } from 'components/filter/shared';
import * as S from 'components/filter/reset/styles';
import {
  resetFilter as resetMaterialsFilter,
  getMaterialFilters,
} from 'slices/materialsFiltersSlice';
import {
  resetFilter as resetMethodFilter,
  getMethodFilters,
} from 'slices/methodFiltersSlice';
import { useSelector, useDispatch } from 'react-redux';

const ResetButton = () => {
  const dispatch = useDispatch();
  const activeMaterialFilters = useSelector(getMaterialFilters);
  const activeMethodFilters = useSelector(getMethodFilters);

  const handleClick = () => {
    dispatch(resetMaterialsFilter());
    dispatch(resetMethodFilter());
  };

  const showButton =
    activeMaterialFilters.length > 0 || activeMethodFilters.length > 0;

  return (
    <S.Reset active={showButton} type="button" onClick={handleClick}>
      <Refresh />
      {BUTTON_TEXT}
    </S.Reset>
  );
};

export default ResetButton;
