import { reducers } from "../reducers";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware(), // getDefaultMiddleware ya incluye thunk
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export { store };