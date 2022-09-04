import {configureStore} from "@reduxjs/toolkit";
import postSlice from "./posts/postSlice";
export const store = configureStore({
  reducer:{
    "posts": postSlice
  }
});
export default store;

export type AppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof store.getState>;
