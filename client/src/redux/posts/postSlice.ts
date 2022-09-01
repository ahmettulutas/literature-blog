import { createSlice,  PayloadAction ,isRejectedWithValue} from "@reduxjs/toolkit";
import {  IPostsInitialState } from "../../types/posts";
import { addSinglePost, getPosts, updateSinglePost, deleteSinglePost } from "./postReducers";

const initialState : IPostsInitialState = {
  posts: {
    status:"",
    data:[]
  },
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
    })
    builder.addCase(getPosts.rejected, (state:IPostsInitialState) => {
      state.error = true;
      state.loading = false;
    })
    builder.addCase(addSinglePost.pending, (state:IPostsInitialState) => {
      state.loading = true;
    })
    builder.addCase(addSinglePost.fulfilled, (state:IPostsInitialState, action: PayloadAction<any>) => {
      state.posts?.data.push(action.payload);
      state.loading = false;
    })
    builder.addCase(addSinglePost.rejected, (state:IPostsInitialState) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(updateSinglePost.pending, (state:IPostsInitialState) => {
      state.loading = true;
    })
    builder.addCase(updateSinglePost.fulfilled, (state:IPostsInitialState, action: PayloadAction<any>) => {
      state.posts?.data.map(item => item._id === action.payload._id  ? action.payload : item);
      state.loading = false;
    })
    builder.addCase(updateSinglePost.rejected, (state:IPostsInitialState) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(deleteSinglePost.pending, (state:IPostsInitialState) => {
      state.loading = true;
    })
    builder.addCase(deleteSinglePost.fulfilled, (state:IPostsInitialState, action: PayloadAction<any>) => {
      state.posts?.data.filter(item => item._id === action.payload._id);
      state.loading = false;
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