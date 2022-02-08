import { useSelector } from 'react-redux';
import { RootState } from 'slices/store';

import FilterBar from 'components/filter/bar';

import { getFilteredRequests } from 'slices/requestsSlice';

const App = (): JSX.Element => {
  const requests = useSelector(getFilteredRequests);
  const allState = useSelector((state: RootState) => state);

  const renderedRequests = requests.map(req => <p key={req.id}>{req.title}</p>);

  return (
    <main>
      <div>{renderedRequests}</div>
      <FilterBar />
    </main>
  );
};

export default App;
