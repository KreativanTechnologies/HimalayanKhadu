import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated : false,
  isLoading: false,
  packageList: [],
};

export const addNewPackage = createAsyncThunk(
  "package/addnewpackage",
  async (formData) => {
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/package/add`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return result?.data;
  }
);

export const fetchAllPackages = createAsyncThunk(
  "package/fetchAllPackages",
  async () => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/package/get`
    );

    return result?.data;
  }
);

export const editPackage = createAsyncThunk(
  "package/editPackage",
  async ({ id, formData }) => {
    const result = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/package/edit/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return result?.data;
  }
);

export const deletePackage = createAsyncThunk(
  "package/deletePackage",
  async (id) => {
    const result = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/package/delete/${id}`
    );

    return result?.data;
  }
);

const AdminPackagesSlice = createSlice({
  name: "adminPackages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPackages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllPackages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.packageList = action.payload.data;
      })
      .addCase(fetchAllPackages.rejected, (state) => {
        state.isLoading = false;
        state.packageList = [];
      });
  },
});

export default AdminPackagesSlice.reducer;