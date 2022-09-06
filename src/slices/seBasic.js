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

const initialState = {
    marketStatus: null 
};

const seBasicSlice = createSlice({
    name: "seBasic",
    initialState,
    extraReducers: {
        [marketStatus.fulfilled]: (state, action) => {            
            state.marketStatus = action.payload;
        },
        [marketStatus.rejected]: (state, action) => {            
            state.marketStatus = null;
        },
    },
});

const { reducer } = seBasicSlice;
export default reducer;