import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  packageList: [],
};

export const fetchAllPackages = createAsyncThunk(
  "package/fetchAllPackages",
  async () => {
    try{
        const result = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/client/package/get`
        );
        return result?.data;
    } catch(error){
        throw Error(error.response?.data?.message || 'Failed to fetch packages')
    }
  }
);

const clientPackageSlice = createSlice({
    name : "clientPackages",
    initialState,
    reducers : {},
    extraReducers : (builder)=> {
        builder
        .addCase(fetchAllPackages.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(fetchAllPackages.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.packageList = action.payload.data;
        })
        .addCase(fetchAllPackages.rejected,(state)=>{
            state.isLoading = false;
            state.packageList = [];
            state.error = action.error.message;
        })
    }
})

export default clientPackageSlice.reducer;