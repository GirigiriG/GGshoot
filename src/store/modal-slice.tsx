import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface modalState {
    imageURL: string,
    isVisible: boolean
}

const initialState: modalState = {
    imageURL: '',
    isVisible: false,
}

export const modalSlice = createSlice({
    name: 'modal_state',
    initialState,
    reducers: {
        setModalImage: (state, action: PayloadAction<string>) => {
            state.imageURL = action.payload;
        },

        toggle: (state, action: PayloadAction<boolean>) => {
            console.log(action.payload);
            
            state.isVisible = !action.payload
        },
    }
});

export const {setModalImage, toggle} = modalSlice.actions;
export default modalSlice.reducer;