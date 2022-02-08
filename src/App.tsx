import Nav from 'components/mockNav';
import MainContainer from 'components/container/mainContainer';
import FilterContainer from 'components/container/filterContainer';
import CardContainer from 'components/container/cardContainer';
import EmptyBoard from 'components/container/emptyBoard';
import constants from 'utils/constants';

const App = (): JSX.Element => {
  return (
    <>
      <Nav />
      <MainContainer>
        <FilterContainer>
          <div>가공방식, 재료</div>
          <div>토글| 상담중인 요청만 보기</div>
        </FilterContainer>
        {constants.requestMockData ? (
          <CardContainer requests={constants.requestMockData} />
        ) : (
          <EmptyBoard message={NO_ESTIMATION} />
        )}
      </MainContainer>
    </>
  );
};

const NO_ESTIMATION = '조건에 맞는 견적 요청이 없습니다.';

export default App;
