import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './global-state';

export const store = configureStore({
    reducer: {
        modalReducer:  modalReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type Appdispatch = typeof store.dispatch;