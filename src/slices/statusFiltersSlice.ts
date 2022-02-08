import { createSlice } from '@reduxjs/toolkit';

const statusFiltersSlice = createSlice({
  name: 'status',
  initialState: false,
  reducers: {
    filterToggled(state) {
      return !state;
    },
  },
});

export const { filterToggled } = statusFiltersSlice.actions;
export default statusFiltersSlice.reducer;
