import {createAsyncThunk} from "@reduxjs/toolkit";
import { IPosts, ISinglePostRequest,  ISinglePostResponse } from "../../types/posts";
import {server, endpoints} from "../../service/index";

export const getPosts = createAsyncThunk(
  "postSlice/getPosts",
  async (_, {rejectWithValue}) => {
    try {
      const response = await server.get<IPosts>(`${endpoints.base}${endpoints.post}/get-all`);
      return response.data;
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
      const response = await server.put<ISinglePostResponse>(`${endpoints.base}${endpoints.post}`, arg);
      return response.data;
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
      const response = await server.put<ISinglePostResponse>(`${endpoints.base}${endpoints.post}${arg._id}`, arg);
      return response.data;
    }
    catch(err) {
      return rejectWithValue(err);
    }
  }
);
export const deleteSinglePost = createAsyncThunk(
  "postSlice/updateSinglePost",
  async (arg:ISinglePostRequest, {rejectWithValue}) => {
    try {
      const response = await server.put<ISinglePostResponse>(`${endpoints.base}${endpoints.post}${arg._id}`, arg);
      return arg._id;
    }
    catch(err) {
      return rejectWithValue(err);
    }
  }
);
