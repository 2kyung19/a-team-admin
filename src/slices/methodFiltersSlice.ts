import { createSlice, createSelector } from '@reduxjs/toolkit';
import { RootState } from 'slices/store';

export const METHODS: METHOD = { milling: '밀링', lathe: '선반' };

interface METHOD {
  [index: string]: string;
}

interface FILTERS {
  [index: string]: boolean;
}

interface FILTER_STATE {
  filters: FILTERS;
  filterOn: boolean;
}

const initialState = Object.keys(METHODS).reduce(
  (result: FILTER_STATE, current) => {
    result.filters[current] = false;
    return result;
  },
  { filters: {}, filterOn: false },
);

const methodFiltersSlice = createSlice({
  name: 'methodFilters',
  initialState,
  reducers: {
    methodFilterToggled(state, action) {
      const toggledFilter = action.payload;
      state.filters[toggledFilter] = !state.filters[toggledFilter];
      state.filterOn = Object.values(state.filters).some(v => v);
    },
  },
});

export const getMethodFilters = createSelector(
  (state: RootState) => state.methodFilters.filters,
  filters =>
    Object.keys(filters)
      .filter(item => filters[item])
      .map(item => METHODS[item]),
);

export const { methodFilterToggled } = methodFiltersSlice.actions;
export default methodFiltersSlice.reducer;
