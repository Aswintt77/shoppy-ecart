import { configureStore } from "@reduxjs/toolkit";
// import { addToWishlist } from "./slices/Wishlist";
import wishlistSlice from './slices/Wishlist.js'
import cartslice from "./slices/cartslice.js";

const store = configureStore({

    reducer: {
        wishlistReducer: wishlistSlice,
        cartReducer:cartslice
    }

})

export default store