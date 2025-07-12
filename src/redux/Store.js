import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice.js";
// import CategorySlice from "./slices/categorySlice";
import CategorySlice from "./slices/CategorySlice.js";
import SearchSlice from "./slices/SearchSlice.js";

const Store = configureStore({
    reducer : {
        cart : CartSlice,
        category : CategorySlice,
        search : SearchSlice,
    }
});
export default Store;
