import { configureStore } from "@reduxjs/toolkit";
import marketSlice from "../features/market";
import coinDetailSlice from "../features/moneydetail";
import newsSlice from "../features/news";
//PAYLAŞIM NOKTASI

export const store= configureStore({
    reducer:{
        market:marketSlice,
        coindetail:coinDetailSlice,
        news:newsSlice,
    }
})