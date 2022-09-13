import { createSlice,  PayloadAction ,isRejectedWithValue, isPending} from "@reduxjs/toolkit";
import {  IPostsInitialState, ISinglePost } from "../../types/postTypes";
import { addSinglePost, getPosts, updateSinglePost, deleteSinglePost } from "./postReducers";

const initialState : IPostsInitialState = {
  posts: [],
  error: false,
  loading: false
};

const postSlice = createSlice({
  name:"postSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    
    builder.addCase(getPosts.fulfilled, (state: IPostsInitialState, action: PayloadAction<ISinglePost[]>) => {
      state.posts = action.payload;
      state.loading = false;
      return state;
    });

    builder.addCase(addSinglePost.fulfilled, (state, action: PayloadAction<ISinglePost>) => {
      state.posts?.push(action.payload);
      state.loading = false;
      return state;
    });

    builder.addCase(updateSinglePost.fulfilled, (state, action: PayloadAction<ISinglePost>) => {
      const updatedPosts = state.posts?.map(item => item._id === action.payload._id ? action.payload : item);
      state.posts = updatedPosts;
      state.loading = false;
      return state;
    });

    builder.addCase(deleteSinglePost.fulfilled, (state, action: PayloadAction<any>) => {
      state.posts = state.posts?.filter(item => item._id !== action.payload);
      state.loading = false;
      return state;
    });
    
    builder.addMatcher(isRejectedWithValue(getPosts, addSinglePost, updateSinglePost, deleteSinglePost ), (state) => {
      state.error = true;
      state.loading = false;
    });

    builder.addMatcher(isPending(getPosts, addSinglePost, updateSinglePost, deleteSinglePost), (state) => {
      state.loading = true;
    });
  }
});

export default postSlice.reducer;