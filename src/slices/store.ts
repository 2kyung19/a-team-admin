import { configureStore } from '@reduxjs/toolkit';

import requestsReducer from 'slices/requestsSlice';
import methodFilterReducer from 'slices/methodFiltersSlice';
import materialsFilterReducer from 'slices/materialsFiltersSlice';
import statusFilterReducer from 'slices/statusFiltersSlice';
import dropdownReducer from 'slices/dropdownSlice';

export const store = configureStore({
  reducer: {
    requests: requestsReducer,
    methodFilters: methodFilterReducer,
    materialFilters: materialsFilterReducer,
    status: statusFilterReducer,
    dropdown: dropdownReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
