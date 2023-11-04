import { configureStore } from "@reduxjs/toolkit";
import marketSlice from "../features/market";
import coinDetailSlice from "../features/moneydetail";
//PAYLAŞIM NOKTASI

export const store= configureStore({
    reducer:{
        market:marketSlice,
        coindetail:coinDetailSlice,
    }
})