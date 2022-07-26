import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import watchlistService from "services/watchlist-service";
import { setMessage } from "./message";

export const getCollections = createAsyncThunk(
    "watchlist/getCollections",
    async ({ userId }, thunkAPI) => {
        try {
            const response = await watchlistService.getCollection(userId);            
            return Promise.resolve(response);
        }
        catch (error) {            
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const addCollection = createAsyncThunk(
    "watchlist/addCollection",
    async ({ userId, watchlistCollectionName, watchlistCollectionDescription, watchlistCount }, thunkAPI) => {        
        try {
            const response = await watchlistService.addCollection(userId, watchlistCollectionName, watchlistCollectionDescription, watchlistCount);
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
export const editCollection = createAsyncThunk(
    "watchlist/editCollection",
    async ({ id, watchlistCollectionName, watchlistCollectionDescription, watchlistCount }, thunkAPI) => {        
        try {
            const response = await watchlistService.editCollection(id, watchlistCollectionName, watchlistCollectionDescription, watchlistCount);
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

export const deleteCollection = createAsyncThunk(
    "watchlist/deleteCollection",
    async ({ id, watchlistCollectionName, watchlistCollectionDescription, watchlistCount }, thunkAPI) => {        
        try {
            const response = await watchlistService.deleteCollection(id, watchlistCollectionName, watchlistCollectionDescription, watchlistCount);
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
    watchlist: null,
    collection: null 
};

const watchlistSlice = createSlice({
    name: "watchlist",
    initialState,
    extraReducers: {
        [getCollections.fulfilled]: (state, action) => {            
            state.collection = action.payload;
            state.watchlist = null;
        },
        [getCollections.rejected]: (state, action) => {            
            state.collection = null;
            state.watchlist = null;
        },
        [addCollection.fulfilled]: (state, action) => {
            state.collection = action.payload;
            state.watchlist = null;
        },
        [addCollection.rejected]: (state, action) => {
            state.collection = action.payload;
            state.watchlist = null;
        },
        [editCollection.fulfilled]: (state, action) => {
            state.collection = action.payload;
            state.watchlist = null;
        },
        [editCollection.rejected]: (state, action) => {
            state.collection = action.payload;
            state.watchlist = null;
        },
        [deleteCollection.fulfilled]: (state, action) => {
            state.collection = action.payload;
            state.watchlist = null;
        },
        [deleteCollection.rejected]: (state, action) => {
            state.collection = action.payload;
            state.watchlist = null;
        },
    },
});

const { reducer } = watchlistSlice;
export default reducer;