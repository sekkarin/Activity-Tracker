import { configureStore } from "@reduxjs/toolkit";
import acticityReducer from "./features/activitys/acticity";
// import filtersReducer from '../features/filters/filtersSlice'

export const store = configureStore({
  reducer: {
    acticity: acticityReducer,
   
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch