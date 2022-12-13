import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import derivativeService from "services/se/derivative-service";

export const  quoteData= createAsyncThunk(
    "se/derivative/quoteData",
    async (thunkAPI) => {
        try {
            const response = await derivativeService.quoteMasterData();            
            return Promise.resolve(response);
        }
        catch (error) {            
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const expiryDatesbySymbol = createAsyncThunk(
    "se/derivative/expiryDates",
    async ({ code }, thunkAPI) => {        
        try {            
            const response = await derivativeService.expiryDatesSymbol(code);            
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
    "se/derivative/getStock",
    async ({ code, expiryDate }, thunkAPI) => {        
        try {  
             
            const response = await derivativeService.getStock(code, expiryDate);            
            return Promise.resolve(response);
        }
        catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            thunkAPI.dispatch(message);            
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const getOptionChainbyDateandSymbol = createAsyncThunk(
            "se/derivate/getOptioChain",
            async({ code,expiryDate}, thunkAPI)=>{

                try {  
                        
                    const response = await derivativeService.getOptionChain(code, expiryDate);            
                    return Promise.resolve(response);
                }
                catch (error) {
                    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                    thunkAPI.dispatch(message);            
                    return thunkAPI.rejectWithValue(error);
                }
            }


)
const initialState = {
    quotemaster: null,  
    expirydate:null ,
    getStockdata:null,
    getOptionChain:null,
};

const derivativeSlice = createSlice({
    name: "seDerivative",
    initialState,
    extraReducers: {
        [quoteData.fulfilled]: (state, action) => {            
            state.quotemaster = action.payload;
        },
        [expiryDatesbySymbol.fulfilled]: (state, action) => {            
            state.expirydate = action.payload;
        },
        [getStockdatabyDateandSymbol.fulfilled]: (state, action) => {            
            state.getStockdata = action.payload;
        },
        [getOptionChainbyDateandSymbol.fulfilled]: (state, action) => {            
            state.getOptionChain = action.payload;
        },
    }
});
const { reducer } = derivativeSlice;
export default reducer;