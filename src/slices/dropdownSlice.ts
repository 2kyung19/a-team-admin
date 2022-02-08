import { createSlice } from '@reduxjs/toolkit';

type DropdownState =
  | { status: 'closed' }
  | { status: 'methods' }
  | { status: 'materials' };

const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState: { status: 'closed' } as DropdownState,
  reducers: {
    resetDropdown(state) {
      state.status = 'closed';
    },
    openDropdown(state, action) {
      state.status = action.payload;
    },
  },
});

export const { resetDropdown, openDropdown } = dropdownSlice.actions;
export default dropdownSlice.reducer;
