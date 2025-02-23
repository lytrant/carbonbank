import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/languageSlice";

const store = configureStore({
  reducer: {
    language: languageReducer, // Thêm reducer
  },
});

export default store;
