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
    async ({ title, subheader, price, validity, priority, description1, description2, description3, description4, description5 }, thunkAPI) => {        
        try {
            const response = await tierService.addTier(title, subheader, price, validity, priority, description1, description2, description3, description4, description5);
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
export const editTier = createAsyncThunk(
    "tier/editTier",
    async ({ id, title, subheader, price, validity, priority, description1, description2, description3, description4, description5 }, thunkAPI) => {        
        try {
            const response = await tierService.editTier(id, title, subheader, price, validity, priority, description1, description2, description3, description4, description5);
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

export const deleteTier = createAsyncThunk(
    "tier/deleteTier",
    async ({ id, title, subheader, price, validity, priority, description1, description2, description3, description4, description5 }, thunkAPI) => {        
        try {
            const response = await tierService.deleteTier(id, title, subheader, price, validity, priority, description1, description2, description3, description4, description5);
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
        [editTier.fulfilled]: (state, action) => {
            state.tierData = action.payload;
            state.server = false;
        },
        [editTier.rejected]: (state, action) => {
            state.tierData = action.payload;
            state.server = false;
        },
        [deleteTier.fulfilled]: (state, action) => {
            state.tierData = action.payload;
            state.server = false;
        },
        [deleteTier.rejected]: (state, action) => {
            state.tierData = action.payload;
            state.server = false;
        },
    },
});

const { reducer } = tierSlice;
export default reducer;