import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface modalState {
    imageURL: string
    isVisible: boolean
    searchValue: string
}

const initialState: modalState = {
    imageURL: '',
    isVisible: false,
    searchValue: '',
}

export const modalSlice = createSlice({
    name: 'modal_state',
    initialState,
    reducers: {
        setModalImage: (state, action: PayloadAction<string>) => {
            state.imageURL = action.payload;
        },

        toggle: (state, action: PayloadAction<boolean>) => {
            state.isVisible = !action.payload
        },

        findImageByAuthor: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
    }
});

export const {setModalImage, toggle, findImageByAuthor} = modalSlice.actions;
export default modalSlice.reducer;