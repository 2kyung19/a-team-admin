import * as S from 'components/filter/toggle/styles';
import { filterToggled } from 'slices/statusFiltersSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'slices/store';

const Toggle = (): JSX.Element => {
  const dispatch = useDispatch();
  const checked = useSelector((state: RootState) => state.status);

  const handleChange = () => {
    dispatch(filterToggled());
  };

  return (
    <>
      <S.Check
        type="checkbox"
        id="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <S.Label htmlFor="checkbox">상담 중인 요청만 보기</S.Label>
    </>
  );
};

export default Toggle;
