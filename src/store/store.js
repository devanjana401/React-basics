import { configureStore, createSlice } from "@reduxjs/toolkit";

//slice creating
const counterSlice = createSlice({
    name:'counter',
    initialState : 0,
    reducers:{
        increment:(state) => state + 1,
        decrement:(state) => state - 1,
        reset:() => 0,
    }
})

//actions exporting
export const {increment,decrement,reset} = counterSlice.actions;

//store creation
export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer, 
    },
});
