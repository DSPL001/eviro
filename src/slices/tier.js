import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tierService from "services/tier-service"; 

export const getAllTier = createAsyncThunk(
    "tier/getAllTier",
    async (thunkAPI) => {
        try {
            const response = await tierService.getAllTier();            
            return Promise.resolve(response);
        }
        catch (error) {            
            return thunkAPI.rejectWithValue(error);
        }
    }
);


const initialState = {
    server: true,
};

const tierSlice = createSlice({
    name: "tier",
    initialState,
    extraReducers: {
        [getAllTier.fulfilled]: (state, action) => {
            state.server = true;
        },
        [getAllTier.rejected]: (state, action) => {
            state.server = false;
        }        
    },
});

const { reducer } = tierSlice;
export default reducer;