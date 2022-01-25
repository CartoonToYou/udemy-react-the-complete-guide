import { createSlice } from "@reduxjs/toolkit";

/**
 * (Redux) Reducer => can't mutatable all states, must create brand new obj and return only!!!
 * (RTK) createSlice => can mutatable all states and RTK will complied them all to not mutation states
 */

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
