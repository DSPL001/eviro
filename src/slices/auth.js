import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import authService from "services/auth-service";
import { objectDecrypt } from "services/encryption";

const user = objectDecrypt(localStorage.getItem("user"));

export const register = createAsyncThunk(
    "auth/register",
    async ({ firstname, lastname, username, email, password }, thunkAPI) => {
        try {
            const response = await authService.register(firstname, lastname, username, email, password);
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

export const login = createAsyncThunk(
    "auth/login",
    async ({ username, password }, thunkAPI) => {
        try {
            const data = await authService.login(username, password);
            return data;
        }
        catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            thunkAPI.dispatch(setMessage(message));
            const errorResponse = {
                status: 'error',
                message: error.error === undefined ? 'Server Error' : 'Check Username and Password',
                logindata: error
            }
            return thunkAPI.rejectWithValue(errorResponse);
        }
    }
);

export const confirmEmail = createAsyncThunk(
    "auth/confirmEmail",
    async ({ userId, code }, thunkAPI) => {        
        try {
            const data = await authService.confirmEmail(userId, code);
            return data;
        }
        catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            thunkAPI.dispatch(setMessage(message));            
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const resetPassword = createAsyncThunk(
    "auth/resetPassword",
    async ({ userId, code, password }, thunkAPI) => {        
        try {
            const data = await authService.resetPassword(userId, code, password);
            return data;
        }
        catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            thunkAPI.dispatch(setMessage(message));            
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const forgotPassword = createAsyncThunk(
    "auth/forgotPassword",
    async ({ email }, thunkAPI) => {        
        try {
            const data = await authService.forgotPassword(email);
            return data;
        }
        catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            thunkAPI.dispatch(setMessage(message));            
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const resendEmail = createAsyncThunk(
    "auth/resendEmail",
    async ({ email }, thunkAPI) => {        
        try {
            const data = await authService.resendEmail(email);
            return data;
        }
        catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            thunkAPI.dispatch(setMessage(message));            
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const logout = createAsyncThunk("auth/logout", async () => {
    await authService.logout();
});

export const updateProfilePicture = createAsyncThunk(
    "tier/updateProfilePicture",
    async ({ id, ProfilePhoto }, thunkAPI) => {        
        try {            
            const response = await authService.updateProfilePicture(id, ProfilePhoto);
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

const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
        },
        [register.rejected]: (state, action) => {
            state.isLoggedIn = false;
        },
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        [login.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [logout.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [confirmEmail.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [confirmEmail.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [forgotPassword.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [forgotPassword.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [resetPassword.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [resetPassword.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [resendEmail.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [resendEmail.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [updateProfilePicture.fulfilled]: (state, action) => {
            state.isLoggedIn = true;            
        },
        [updateProfilePicture.rejected]: (state, action) => {
            state.isLoggedIn = true;            
        }
    },
});

const { reducer } = authSlice;
export default reducer;