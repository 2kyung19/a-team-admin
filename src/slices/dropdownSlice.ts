import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type DropdownState = 'closed' | 'materials' | 'methods';

const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState: 'closed' as DropdownState,
  reducers: {
    resetDropdown() {
      return 'closed';
    },
    openDropdown(_, action: PayloadAction<'closed' | 'materials' | 'methods'>) {
      return action.payload;
    },
  },
});

export const { resetDropdown, openDropdown } = dropdownSlice.actions;
export default dropdownSlice.reducer;
