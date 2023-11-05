import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
    market: [],
    isLoading:true,
    isSuccess:false,

}

export const getMarketData = createAsyncThunk("market/GET", async ({ search }) => {
    const options = {
      url: 'https://coinranking1.p.rapidapi.com/coins',
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '60',
        offset: '0',
      },
      headers: {
        'X-RapidAPI-Key': 'API_KEY',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    };
  
    if (search) {
      // Eğer "search" değeri varsa, isteğin "params" alanına ekleyin
      options.params.search = search;
    }
  
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      return error;
    }
  });
  

export const marketSlice = createSlice({
    name:'market',
    initialState,
    reducers:{
    },
    extraReducers:(builder) =>{
        builder

        .addCase(getMarketData.fulfilled,(state,action)=>{
            state.market=action.payload;
            state.isLoading=false;
            state.isSuccess=true;
        })
    }
})

export default marketSlice.reducer;  //klasik default
