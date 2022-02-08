import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'slices/store';

export const MATERIALS: MATERIAL = {
  aluminium: '알루미늄',
  carbonSteel: '탄소강',
  copper: '구리',
  alloySteel: '합금강',
  steel: '강철',
};

interface MATERIAL {
  [index: string]: string;
}

interface FILTERS {
  [index: string]: boolean;
}

interface FILTER_SLICE {
  filters: FILTERS;
  filterOn: boolean;
}

const initialState = Object.keys(MATERIALS).reduce(
  (result: FILTER_SLICE, current) => {
    result.filters[current] = false;
    return result;
  },
  { filters: {}, filterOn: false },
);

const materialsFiltersSlice = createSlice({
  name: 'methodFilters',
  initialState,
  reducers: {
    materialsFilterToggled(state, action: PayloadAction<string>) {
      const toggledFilter = action.payload;
      state.filters[toggledFilter] = !state.filters[toggledFilter];
      state.filterOn = Object.values(state.filters).some(v => v);
    },
    resetFilter(state) {
      Object.keys(state.filters).forEach(key => {
        state.filters[key] = false;
      });
      state.filterOn = Object.values(state.filters).some(v => v);
    },
  },
});

export const getMaterialFilters = createSelector(
  (state: RootState) => state.materialFilters.filters,
  filters =>
    Object.keys(filters)
      .filter(item => filters[item])
      .map(item => MATERIALS[item]),
);

export const { materialsFilterToggled, resetFilter } =
  materialsFiltersSlice.actions;
export default materialsFiltersSlice.reducer;
