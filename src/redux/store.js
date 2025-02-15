import cartSlice from "./cartSlice";
import strSlice from "./strSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer : {
      str : strSlice,
      cart : cartSlice
    }
})

export default store;