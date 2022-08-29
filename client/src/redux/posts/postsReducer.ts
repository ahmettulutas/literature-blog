import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name:"postSlice",
  initialState: {
    posts:{},
    error:false,
    loading:false,

  },
  reducers: {},
});

export default postSlice.reducer;