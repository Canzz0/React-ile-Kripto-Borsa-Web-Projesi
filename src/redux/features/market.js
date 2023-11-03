import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
    market: [],
    loading:false,
    error:false,
}

export const getMarketDataHours = createAsyncThunk("GET",async () => {
    const options = {
        url: 'https://coinranking1.p.rapidapi.com/coins',
        params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: '24h',
            'tiers[0]': '1',
            orderBy: 'marketCap',
            orderDirection: 'desc',
            limit: '60',
            offset: '0'
        },
        headers: {
            'X-RapidAPI-Key': '6bcdc0678cmsh92358b4c31722b6p1a4e23jsn0faa60a71079',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
            return response.data
    } catch (error) {
        console.error(error);
    }

})

export const getMarketDataDays = createAsyncThunk("GET",async () => {
    const options = {
        url: 'https://coinranking1.p.rapidapi.com/coins',
        params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: '30d',
            'tiers[0]': '1',
            orderBy: 'marketCap',
            orderDirection: 'desc',
            limit: '60',
            offset: '0'
        },
        headers: {
            'X-RapidAPI-Key': '6bcdc0678cmsh92358b4c31722b6p1a4e23jsn0faa60a71079',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.comWW'
        }
    };

    try {
        const response = await axios.request(options);
            return response.data
    } catch (error) {
        console.error(error);
    }

})

export const marketSlice = createSlice({
    name:'market',
    initialState,
    reducers:{
    },
    extraReducers:(builder) =>{
        builder
        .addCase(getMarketDataHours.fulfilled,(state,action)=>{
            state.market=action.payload;
        })
    }
})

export default marketSlice.reducer;  //klasik default