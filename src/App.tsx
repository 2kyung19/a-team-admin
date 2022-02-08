
import Nav from 'components/mockNav';
import MainContainer from 'components/container/mainContainer';
import FilterContainer from 'components/container/filterContainer';
import CardContainer from 'components/container/cardContainer';
import EmptyBoard from 'components/container/emptyBoard';
import FilterBar from 'components/filter/bar';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { resetDropdown } from 'slices/dropdownSlice';
import { getFilteredRequests } from 'slices/requestsSlice';

const NO_ESTIMATION = '조건에 맞는 견적 요청이 없습니다.';

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const requests = useSelector(getFilteredRequests);

  useEffect(() => {
    const closeDropdown = () => {
      dispatch(resetDropdown());
    };

    window.addEventListener('click', closeDropdown);

    return () => {
      window.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <>
      <Nav />
      <MainContainer>
        <FilterContainer>
          <FilterBar />
        </FilterContainer>
        {requests.length > 0 ? (
          <CardContainer requests={requests} />
        ) : (
          <EmptyBoard message={NO_ESTIMATION} />
        )}
      </MainContainer>
    </>
  );
};

export default App;

