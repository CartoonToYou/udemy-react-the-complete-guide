import { createSlice } from "@reduxjs/toolkit";

/**
 * (Redux) Reducer => can't mutatable all states, must create brand new obj and return only!!!
 * (RTK) createSlice => can mutatable all states and RTK will complied them all to not mutation states
 */

const initialCounterState = { counter: 0, showCounter: true };

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

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
