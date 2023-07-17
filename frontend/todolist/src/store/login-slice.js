import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    isLoggedIn: false
  },
  reducers: {
    setLoggedIn(state) {
      return state.isLoggedIn = true
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
