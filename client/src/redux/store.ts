import {configureStore} from "@reduxjs/toolkit";
import postSlice from "./posts/postsReducer";
export const store = configureStore({
  reducer:{
    "posts": postSlice
  }
});
export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
