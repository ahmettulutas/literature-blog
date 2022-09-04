import { createSlice,  PayloadAction ,isRejectedWithValue} from "@reduxjs/toolkit";
import {  IPostsInitialState,  ISinglePostResponse, ISinglePost } from "../../types/postTypes";
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
  extraReducers(builder)  {
    builder.addCase(getPosts.pending, (state:IPostsInitialState) => {
      state.loading = true;
    })
    builder.addCase(getPosts.fulfilled, (state:IPostsInitialState, action: PayloadAction<any>) => {
      state.posts = action.payload;
      state.loading = false;
      return state;
    })
    builder.addCase(getPosts.rejected, (state) => {
      state.error = true;
      state.loading = false;
    })
     builder.addCase(addSinglePost.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(addSinglePost.fulfilled, (state, action:PayloadAction<ISinglePost | never>) => {
      state.posts?.push(action.payload);
      state.loading = false;
      return state;
    })
    builder.addCase(addSinglePost.rejected, (state:IPostsInitialState) => {
      state.error = true;
      state.loading = false;
    });
     builder.addCase(updateSinglePost.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(updateSinglePost.fulfilled, (state, action: PayloadAction<ISinglePost>) => {
      const updatedPosts = state.posts?.map(item => item._id === action.payload._id  ? action.payload : item);
      state.posts = updatedPosts;
      state.loading = false;
      return state;
    })
    builder.addCase(updateSinglePost.rejected, (state) => {
      state.error = true;
      state.loading = false;
    }); 
     builder.addCase(deleteSinglePost.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(deleteSinglePost.fulfilled, (state, action: PayloadAction<any>) => {
      state.posts = state.posts?.filter(item => item._id !== action.payload);
      state.loading = false;
      return state;
    })
    builder.addCase(deleteSinglePost.rejected, (state:IPostsInitialState) => {
      state.error = true;
      state.loading = false;
    }); 

/*  builder.addMatcher(isRejectedWithValue(getPosts, addSinglePost, updateSinglePost, deleteSinglePost ), (state, action) => {
        state.error = true;
        state.loading = false;
     }); */
  }
});

export default postSlice.reducer;