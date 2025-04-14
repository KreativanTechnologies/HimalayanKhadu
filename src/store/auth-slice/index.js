// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   isAuthenticated: false,
//   isLoading: true,
//   user: null,
//   token: null, // for live token
// };

// // Async thunk in redux

// // Register user async thunk
// export const registerUser = createAsyncThunk(
//   "/auth/register",
//   async (formData) => {
//     const response = await axios.post(
//       `${import.meta.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
//       formData,
//       {
//         withCredentials: true,
//       }
//     );
//     return response.data;
//   }
// );

// // Login user async thunk
// export const loginUser = createAsyncThunk("/auth/login", async (formData) => {
//   const response = await axios.post(
//     `${import.meta.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
//     formData,
//     {
//       withCredentials: true,
//     }
//   );
//   return response.data;
// });

// // Logout user async thunk
// export const logoutUser = createAsyncThunk("/auth/logout", async () => {
//   const response = await axios.post(
//     `${import.meta.env.NEXT_PUBLIC_API_URL}/api/auth/logout`,
//     {},
//     {
//       withCredentials: true,
//     }
//   );
//   return response.data;
// });

// // // checkAuth user async thunk  for local token
// // export const checkAuth = createAsyncThunk('/auth/checkauth',
// //     async () => {
// //         const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/check-auth`,
// //             {
// //                 withCredentials: true,
// //                 headers : {
// //                     'Cache-Control' : 'no-store, no-cache, must-revalidate, proxy-revalidate',
// //                 }
// //             }
// //         )
// //         return response.data
// //     }
// // )

// // checkAuth user async thunk  for live token
// export const checkAuth = createAsyncThunk("/auth/checkauth", async (token) => {
//   const response = await axios.get(
//     `${import.meta.env.NEXT_PUBLIC_API_URL}/api/auth/check-auth`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Cache-Control":
//           "no-store, no-cache, must-revalidate, proxy-revalidate",
//       },
//     }
//   );
//   return response.data;
// });

// // Explanation file k end mein hai
// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setUser: (state, action) => {},
//     resetTokenAndCredentials: (state) => {
//       // for live token
//       (state.isAuthenticated = false),
//         (state.user = null),
//         (state.token = null);
//     },
//   },
//   extraReducers: (builder) => {
//     builder

//       // register user ke extra reducers
//       .addCase(registerUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = null;
//         state.isAuthenticated = false;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.user = null;
//         state.isAuthenticated = false;
//       })

//       // login user ke extra reducers
//       .addCase(loginUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = action.payload.success ? action.payload.user : null;
//         state.isAuthenticated = action.payload.success;
//         state.token = action.payload.token; // for live token
//         sessionStorage.setItem("token", JSON.stringify(action.payload.token)); // for live token
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.user = null;
//         state.isAuthenticated = false;
//         state.token = null; // for live token
//       })

//       // logout user ke extra reducers
//       .addCase(logoutUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = null;
//         state.isAuthenticated = false;
//       })

//       // checkAuth user ke extra reducers
//       .addCase(checkAuth.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(checkAuth.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = action.payload.success ? action.payload.user : null;
//         state.isAuthenticated = action.payload.success;
//       })
//       .addCase(checkAuth.rejected, (state, action) => {
//         state.isLoading = false;
//         state.user = null;
//         state.isAuthenticated = false;
//       });
//   },
// });

// export const { setUser, resetTokenAndCredentials } = authSlice.actions; // for live token

// export default authSlice.reducer;

// // const authSlice = createSlice({
// //     name: 'auth',
// //     initialState,
// //     reducers: {
// //         setUser: (state, action) => { },
// //     },
// //     // extra reducer 3 methods ka use krega pending-during data transfer              fulfilled- data transfer done           rejected-data doesn;t transferred
// //     extraReducers: (builder) => {
// //         // currently data pending mein hai to loading ko true kar diya iss se screen par loading likha aaega
// //         builder.addCase(registerUser.pending, (state) => {
// //             state.isLoading = true
// //         })

// //         // api call ya data transfer successfull ho gya to ab hum loading ko false kar dege and user mein data store kar lege or authenticated ko false hi rakhege because first time registered karne par user authenticated nhi hai use phle login par jana hoga
// //         .addCase(registerUser.fulfilled, (state, action) => {
// //             state.isLoading = false;
// //             state.user = null
// //             state.isAuthenticated = false
// //         })

// //         // rejected case mein api call nhi hui to hum loading ko false rakhenge  user ko null kar denge and authentication ko bhi false kar denge
// //         .addCase(registerUser.rejected, (state, action) => {
// //             state.isLoading = false;
// //             state.user = null
// //             state.isAuthenticated = false
// //         })
// //     }
// // })
