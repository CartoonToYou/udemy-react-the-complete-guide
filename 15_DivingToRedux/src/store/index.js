import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

/** Map of reducer
 * -- USE THIS -- when need to use many reducers (RTK will merged all with this structure)
 */
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
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

export default store;
