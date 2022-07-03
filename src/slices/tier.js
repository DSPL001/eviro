import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tierService from "services/tier-service"; 
import { setMessage } from "./message";

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

export const addTier = createAsyncThunk(
    "tier/addTier",
    async ({ tierName, description, amount, validity }, thunkAPI) => {
        try {
            const response = await tierService.addTier(tierName, description, amount, validity);
            thunkAPI.dispatch(setMessage(response.message));
            return Promise.resolve(response);
        }
        catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue(error);
        }
    }
);


const initialState = {
    server: true,
    tierData: null 
};

const tierSlice = createSlice({
    name: "tier",
    initialState,
    extraReducers: {
        [getAllTier.fulfilled]: (state, action) => {
            state.tierData = action.payload;
            state.server = true;
        },
        [getAllTier.rejected]: (state, action) => {
            state.tierData = null;
            state.server = false;
        },
        [addTier.fulfilled]: (state, action) => {
            state.tierData = action.payload;
            state.server = false;
        },
        [addTier.rejected]: (state, action) => {
            state.tierData = action.payload;
            state.server = false;
        },

    },
});

const { reducer } = tierSlice;
export default reducer;