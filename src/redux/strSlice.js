import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name : "str",
    initialState : {
        value : []
    },
    reducers : {
        add : (state,action)=>{
          state.value.push(action.payload)
        },
        edit : (state,action)=>{

        }
    }

})

export const {add,edit} = slice.actions;
export default slice.reducer;


