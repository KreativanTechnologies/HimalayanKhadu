import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isLoading: false,
  error: null, // ✅ added error handling
};

// ✅ Add to cart
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ userId, tourPackageId, quantity }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        // eslint-disable-next-line no-undef
        `${process.env.NEXT_PUBLIC_API_URL}/api/shop/cart/add`,
        { userId, tourPackageId, quantity }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Add to cart failed");
    }
  }
);

// ✅ Fetch cart items
export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        // eslint-disable-next-line no-undef
        `${process.env.NEXT_PUBLIC_API_URL}/api/shop/cart/get/${userId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch cart");
    }
  }
);

// ✅ Delete cart item
export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async ({ userId, tourPackageId }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        // eslint-disable-next-line no-undef
        `${process.env.NEXT_PUBLIC_API_URL}/api/shop/cart/${userId}/${tourPackageId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Delete failed");
    }
  }
);

// ✅ Update quantity
export const updateCartQuantity = createAsyncThunk(
  "cart/updateCartQuantity",
  async ({ userId, tourPackageId, quantity }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        // eslint-disable-next-line no-undef
        `${process.env.NEXT_PUBLIC_API_URL}/api/shop/cart/update`,
        { userId, tourPackageId, quantity }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Update failed");
    }
  }
);

// ✅ Slice
const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add to cart
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload?.data || [];
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Fetch cart
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload?.data || [];
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Update cart
      .addCase(updateCartQuantity.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload?.data || [];
      })
      .addCase(updateCartQuantity.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Delete from cart
      .addCase(deleteCartItem.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload?.data || [];
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default shoppingCartSlice.reducer;
