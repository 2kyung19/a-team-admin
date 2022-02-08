import { createSlice } from '@reduxjs/toolkit';

const statusFiltersSlice = createSlice({
  name: 'status',
  initialState: false,
  reducers: {
    filterToggled(state) {
      return !state;
    },
    resetStatus(state) {
      state = false;
    },
  },
});

export const { filterToggled, resetStatus } = statusFiltersSlice.actions;
export default statusFiltersSlice.reducer;
