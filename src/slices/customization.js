import { createSlice } from "@reduxjs/toolkit";
import { SET_BORDER_RADIUS, SET_MENU, MENU_OPEN, SET_FONT_FAMILY } from 'slices/actions'

// project imports
import EviroConfig from 'config-items';

const initialState = {
    isOpen: [], // for active default menu
    fontFamily: EviroConfig.app.fontFamily,
    borderRadius: EviroConfig.app.borderRadius,
    opened: true,
};

const customizationSlice = createSlice({
    name: "customization",
    initialState,
    extraReducers: {
        [MENU_OPEN]: (state, action) => {
            const id = action.id;
            return {
                ...state, isOpen: [id]
            };
        },
        [SET_MENU]: (state, action) => {
            return {
                ...state, opened: action.opened
            };
        },
        [SET_FONT_FAMILY]: (state, action) => {
            return {
                ...state, fontFamily: action.fontFamily
            };
        },
        [SET_BORDER_RADIUS]: (state, action) => {
            return {
                ...state, borderRadius: action.borderRadius
            };
        }
    }
});

export default customizationSlice.reducer