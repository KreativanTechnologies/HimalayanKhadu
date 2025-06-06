import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isLoading: false,
};

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ userId, tourPackageId, quantity }) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/shop/cart/add`,
      {
        userId,
        tourPackageId,
        quantity,
      }
    );
    return response.data;
  }
);


export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (userId) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/shop/cart/get/${userId}`,
    );
    return response.data
  }
);


export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async ({ userId, tourPackageId}) => {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/api/shop/cart/${userId}/${tourPackageId}`,
      {
        userId,
        tourPackageId,
      }
    );
    return response.data
  }
);


export const updateCartQuantity = createAsyncThunk(
  "cart/updateCartQuantity",
  async ({ userId, tourPackageId, quantity }) => {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/api/shop/cart/update`,
      {
        userId,
        tourPackageId,
        quantity,
      }
    );
    return response.data
  }
);

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(addToCart.pending, (state)=> {
        state.isLoading = true
    })
    .addCase(addToCart.fulfilled, (state,action)=> {
        state.isLoading = false
        state.cartItems = action?.payload?.data
    })
    .addCase(addToCart.rejected, (state)=> {
        state.isLoading = false
        state.cartItems = []
    })

    .addCase(fetchCartItems.pending, (state)=> {
        state.isLoading = true
    })
    .addCase(fetchCartItems.fulfilled, (state,action)=> {
        state.isLoading = false
        state.cartItems = action?.payload?.data
    })
    .addCase(fetchCartItems.rejected, (state)=> {
        state.isLoading = false
        state.cartItems = []
    })
    
    .addCase(updateCartQuantity.pending, (state)=> {
        state.isLoading = true
    })
    .addCase(updateCartQuantity.fulfilled, (state,action)=> {
        state.isLoading = false
        state.cartItems = action?.payload?.data
    })
    .addCase(updateCartQuantity.rejected, (state)=> {
        state.isLoading = false
        state.cartItems = []
    })
    
    .addCase(deleteCartItem.pending, (state)=> {
        state.isLoading = true
    })
    .addCase(deleteCartItem.fulfilled, (state,action)=> {
        state.isLoading = false
        state.cartItems = action?.payload?.data
    })
    .addCase(deleteCartItem.rejected, (state)=> {
        state.isLoading = false
        state.cartItems = []
    })

  },
});

export default shoppingCartSlice.reducer