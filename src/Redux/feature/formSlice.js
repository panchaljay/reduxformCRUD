import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name:"formdata",
    initialState:{
        formarray:[]
    },
    reducers:{
        adddata:(state,action)=>{
            // console.log(action.payload);
            state.formarray = action.payload
        }
    }
})

export const {adddata} = formSlice.actions
export default formSlice.reducer