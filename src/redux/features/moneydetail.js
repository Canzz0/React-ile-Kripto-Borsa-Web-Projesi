import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    coindetail: [],
    isSuccess:false,
}

export const getCoinDetail = createAsyncThunk("GET", async ({ time, uuid }) => {
    const options = {
        url: 'https://coinranking1.p.rapidapi.com/coins',
        params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: time,
            'uuids[0]': uuid,
            'tiers[0]': '1',
            orderBy: 'marketCap',
            orderDirection: 'desc',
            limit: '50',
            offset: '0'
        },
        headers: {
            'X-RapidAPI-Key': 'API_KEY',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        return (error);
    }
})


export const coinDetailSlice = createSlice({
    name: 'coindetail',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getCoinDetail.fulfilled, (state, action) => {
                state.coindetail = action.payload;
                state.isSuccess=true;
            })
    }
})

export default coinDetailSlice.reducer;
