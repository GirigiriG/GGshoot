import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface modalState {
    imageURL: string
    isModalVisible: boolean
    isProfileSettingVisible: boolean
    searchValue: string
}

const initialState: modalState = {
    imageURL: '',
    isModalVisible: false,
    isProfileSettingVisible: false,
    searchValue: '',
}

export const modalSlice = createSlice({
    name: 'modal_state',
    initialState,
    reducers: {
        setModalImage: (state, action: PayloadAction<string>) => {
            state.imageURL = action.payload;
        },

        toggleMoal: (state, action: PayloadAction<boolean>) => {
            state.isModalVisible = !action.payload
        },

        toggleProfileSettings: (state, action: PayloadAction<boolean>) => {
            state.isProfileSettingVisible = !action.payload;
        },

        findImageByAuthor: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
    }
});

export const {setModalImage, toggleMoal, findImageByAuthor, toggleProfileSettings} = modalSlice.actions;
export default modalSlice.reducer;