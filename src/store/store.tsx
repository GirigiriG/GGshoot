import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal-slice";

export const store = configureStore({
    reducer: {
        modalReducer:  modalReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type Appdispatch = typeof store.dispatch;