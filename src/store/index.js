import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'slices/auth';
import messageReducer from 'slices/message';
import customizationSlice from 'slices/customization';
import popupSlice from 'slices/popup';
import tierSlice from 'slices/tier';

const store = configureStore({
    reducer: {
        auth: authReducer,
        message: messageReducer,
        customization: customizationSlice,
        popup: popupSlice,
        tier: tierSlice
    }
});
export default store;