import { configureStore } from "@reduxjs/toolkit";
import marketSlice from "../features/market";
//PAYLAŞIM NOKTASI

export const store= configureStore({
    reducer:{
        market:marketSlice,
    }
})