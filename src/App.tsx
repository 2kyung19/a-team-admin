import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'slices/store';

import FilterBar from 'components/filter/bar';

import { resetDropdown } from 'slices/dropdownSlice';
import { getFilteredRequests } from 'slices/requestsSlice';

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const dropdownStatus = useSelector((state: RootState) => state.dropdown);
  const requests = useSelector(getFilteredRequests);
  const allState = useSelector((state: RootState) => state);

  useEffect(() => {
    const closeDropdown = () => {
      if (dropdownStatus !== 'closed') {
        dispatch(resetDropdown());
      }
    };
    window.addEventListener('click', closeDropdown);

    return () => {
      window.removeEventListener('click', closeDropdown);
    };
  });

  const renderedRequests = requests.map(req => <p key={req.id}>{req.title}</p>);

  return (
    <main>
      <div>{renderedRequests}</div>
      <FilterBar />
    </main>
  );
};

export default App;
