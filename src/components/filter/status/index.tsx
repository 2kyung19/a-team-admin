import { filterToggled } from 'slices/statusFiltersSlice';
import { useDispatch } from 'react-redux';
import * as S from 'components/filter/status/styles';

const StatusFilter = () => {
  const dispatch = useDispatch();

  return (
    <S.StatusToggle onClick={() => dispatch(filterToggled())}>
      상담 중인 요청만 보기
    </S.StatusToggle>
  );
};

export default StatusFilter;
