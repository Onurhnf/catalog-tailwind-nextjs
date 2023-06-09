import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    token: null,
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.token = null;
      state.isLoggedIn = false;
      state.data = null;
    },
    setUserData: (state, action) => {
      state.data = { ...action.payload };
    },
  },
});

export const { login, logout, setUserData } = UserSlice.actions;

export default UserSlice.reducer;
