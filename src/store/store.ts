import { reducers } from "../reducers";
import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer, PersistConfig } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig: PersistConfig<any> = {
    key: 'root',
    storage,
    blacklist: [''], //This propertie is important
}  

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], // Ignora las acciones relacionadas con redux-persist
            },
        }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export { store, persistor };