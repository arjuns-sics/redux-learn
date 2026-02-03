import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        count:0
    },
    reducers:{
        addItem:(state,action)=>{
            const newItem = action.payload;
            state.items.push(newItem)
            state.count++
        }
    }
})

export const {addItem} = cartSlice.actions;
export default cartSlice.reducer;