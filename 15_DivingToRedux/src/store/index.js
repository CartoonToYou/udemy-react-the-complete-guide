import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

/**
 * (Redux) Reducer => can't mutatable all states, must create brand new obj and return only!!!
 * (RTK) createSlice => can mutatable all states and RTK will complied them all to not mutation states
 */

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

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

/** Map of reducer
 * -- USE THIS -- when need to use many reducers (RTK will merged all with this structure)
 */
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authentication: authSlice.reducer,
    // ...restReducers
  },
});

/**
 * Global reducer in one object
 * -- USE THIS -- when need to use just one object
 */
// const store = configureStore({
//   reducer: counterSlice.reducer,
// });

export const counterActions = counterSlice.actions;

export default store;
