import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'Wishlist',
    initialState: [],
    reducers: {
        // to define the actions
        addToWishlist: ((state, action)=>{
            state.push(action.payload)
        }),
        deleteFromWishlist:((state,action) =>{
            return state.filter(item=>item.id!=action.payload)
        })
    }
})

export const {addToWishlist,deleteFromWishlist} = wishlistSlice.actions;

export default wishlistSlice.reducer;