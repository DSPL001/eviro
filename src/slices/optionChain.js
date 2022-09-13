import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import optionChainService from "services/OptionChain-Services";

export const  quoteData= createAsyncThunk(
    "se/quoteData",
    async (thunkAPI) => {
        try {
            const response = await optionChainService.quoteMasterData();            
            return Promise.resolve(response);
        }
        catch (error) {            
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const expiryDatesbySymbol = createAsyncThunk(
    "se/expiryDates",
    async ({ code }, thunkAPI) => {        
        try {            
            const response = await optionChainService.expiryDatesSymbol(code);            
            return Promise.resolve(response);
        }
        catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            thunkAPI.dispatch(message);            
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const getStockdatabyDateandSymbol = createAsyncThunk(
    "se/getStock",
    async ({ code, expirydate }, thunkAPI) => {        
        try {            
            const response = await optionChainService.getStockdatabyDateandSymbol(code, expirydate);            
            return Promise.resolve(response);
        }
        catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            thunkAPI.dispatch(message);            
            return thunkAPI.rejectWithValue(error);
        }
    }
);
const initialState = {
    quotemaster: null,  
    expirydate:null ,
    getStockdatas:null
};

const optionChainSlice = createSlice({
    name: "optionchain",
    initialState,
    extraReducers: {
        [quoteData.fulfilled]: (state, action) => {            
            state.quotemaster = action.payload;
        },
        [expiryDatesbySymbol.fulfilled]: (state, action) => {            
            state.expirydate = action.payload;
        },
        [getStockdatabyDateandSymbol.fulfilled]: (state, action) => {            
            state.expirydate = action.payload;
        },
    }
});
const { reducer } = optionChainSlice;
export default reducer;