import Refresh from 'assets/icons/Refresh';
import { RESET_BUTTON_TEXT as BUTTON_TEXT } from 'components/filter/shared';
import * as S from 'components/filter/reset/styles';
import { resetFilter as resetMaterialsFilter } from 'slices/materialsFiltersSlice';
import { resetFilter as resetMethodFilter } from 'slices/methodFiltersSlice';
import { useDispatch } from 'react-redux';

type AppProps = {
  active: boolean;
};

const ResetButton = ({ active }: AppProps) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetMaterialsFilter());
    dispatch(resetMethodFilter());
  };

  return (
    <S.Reset active={active} type="button" onClick={handleClick}>
      <Refresh />
      {BUTTON_TEXT}
    </S.Reset>
  );
};

export default ResetButton;
