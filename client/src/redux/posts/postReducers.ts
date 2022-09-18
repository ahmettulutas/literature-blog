import {createAsyncThunk} from "@reduxjs/toolkit";
import { ISinglePost, ISinglePostRequest,  ISinglePostResponse } from "../../types/postTypes";
import {server, endpoints} from "../../service/index";

export const getPosts = createAsyncThunk(
  "postSlice/getPosts",
  async (_:void, {rejectWithValue}) => {
    try {
      const response = await server.get(`${endpoints.base}${endpoints.post}/get-all`);
      return response.data.data as ISinglePost[];
    }
    catch(err) {
      return rejectWithValue(err);
    }
  }
);

export const addSinglePost = createAsyncThunk(
  "postSlice/addSinglePost",
  async (arg:ISinglePostRequest, {rejectWithValue}) => {
    try {
      const response = await server.post<ISinglePostResponse>(`${endpoints.base}${endpoints.post}`, arg);
      return response.data.data as ISinglePost;
    }
    catch(err) {
      return rejectWithValue(err);
    }
  }
);
export const updateSinglePost = createAsyncThunk(
  "postSlice/updateSinglePost",
  async (arg:ISinglePostRequest, {rejectWithValue}) => {
    try {
      const response = await server.put<ISinglePostResponse>(`${endpoints.base}${endpoints.post}/${arg._id}`, arg.data);
      return response.data.data as ISinglePost;
    }
    catch(err) {
      return rejectWithValue(err);
    }
  }
);
export const deleteSinglePost = createAsyncThunk(
  "postSlice/deleteSinglePost",
  async (arg:ISinglePostRequest, {rejectWithValue}) => {
    try {
      await server.delete(`${endpoints.base}${endpoints.post}/${arg._id}`);
      return arg._id as string;
    }
    catch(err) {
      return rejectWithValue(err);
    }
  }
);
