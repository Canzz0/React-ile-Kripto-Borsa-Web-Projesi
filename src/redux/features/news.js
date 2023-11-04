import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    news: [],
    isLoading: true,
    isSuccess: false
}

export const getNewsData = createAsyncThunk("news/GET", async () => {
    const options = {
        url: 'https://newsapi.org/v2/everything?q=crypto&apiKey=0751bb19c3cd4f08ac281780737da1af'
    };
    try {
        const response = await axios.request(options);
        return response.data.articles;
    } catch (error) {
        return error;
    }
})

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getNewsData.pending,(state)=>{
                state.isSuccess=false;
            })
            .addCase(getNewsData.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isLoading=false;
                state.news = action.payload;
            })
    }
})

export default newsSlice.reducer;