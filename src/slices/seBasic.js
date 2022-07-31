import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import seBasicService from "services/se/basic-service";

export const marketStatus = createAsyncThunk(
    "se/basic/marketStatus",
    async (thunkAPI) => {
        try {
            const response = await seBasicService.marketStatus();            
            return Promise.resolve(response);
        }
        catch (error) {            
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const stockCodes = createAsyncThunk(
    "se/basic/stockCodes",
    async (thunkAPI) => {
        try {
            const response = await seBasicService.stockCodes();            
            return Promise.resolve(response);
        }
        catch (error) {            
            return thunkAPI.rejectWithValue(error);
        }
    }
);
const initialState = {
    marketStatus: null,
    stockCodes: null
};

const seBasicSlice = createSlice({
    name: "seBasic",
    initialState,
    extraReducers: {
        [marketStatus.fulfilled]: (state, action) => {            
            state.marketStatus = action.payload;
            state.stockCodes = null;

        },
        [marketStatus.rejected]: (state, action) => {            
            state.marketStatus = null;            
        },
        [stockCodes.fulfilled]: (state, action) => {            
            state.stockCodes = action.payload;   
        },
        [stockCodes.rejected]: (state, action) => {            
            state.stockCodes = null
        },
    },
});

const { reducer } = seBasicSlice;
export default reducer;