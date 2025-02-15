import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const slice = createSlice({
  name: "cartSlice",
  initialState: {
    value: []
  },
  reducers: {
    addToCart: (state, action) => {
      if (state.value.length > 0) {
        let isProduct = state.value.filter((item) => item.id === action.payload.id).length
        if (isProduct) {
          toast.warn("This Product is Already Exists In Your Cart")
        } else {
          state.value.push(action.payload)
          toast.success("Added To Cart")
        }
      } else {
        state.value.push(action.payload)
        toast.success("Added To Cart")
      }
    },
    IncreaseQyantity: (state, action) => {
      const index = state.value.findIndex((item) => item.id === action.payload)
      if (state.value[index].quantity < 10) {
        state.value[index].quantity++
      }
    },
    DecreaseQyantity: (state, action) => {
      const index = state.value.findIndex((item) => item.id === action.payload)
      if (state.value[index].quantity >= 2) {
        state.value[index].quantity--
      }
    },
    DeleteCartProduct: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload)
    },
    fetchAll: (state, action) => {
      let data = action.payload
      if (data.length > 0) {
        state.value = data
      }
    }
  }
})

export const { addToCart, IncreaseQyantity, DecreaseQyantity, DeleteCartProduct,fetchAll } = slice.actions;
export default slice.reducer;