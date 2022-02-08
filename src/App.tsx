import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FilterBar from 'components/filter/bar';

import { resetDropdown } from 'slices/dropdownSlice';
import { getFilteredRequests } from 'slices/requestsSlice';
import Card from 'components/card';

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

  const renderedRequests = requests.map(req => (
    <Card key={req.id} request={req} />
  ));

  return (
    <main>
      <FilterBar />
      <div>{renderedRequests}</div>
    </main>
  );
};

export default App;
