import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./feature/formSlice"
const store = configureStore({
    reducer:{
        formdata:formReducer
    }
})

export default store