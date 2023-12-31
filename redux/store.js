import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import photoReducer from './slices/photoSlice'
import { createLogger } from 'redux-logger'
import userReducer from './slices/userSlice';
import pageReducer from './slices/pageSlice'

const logger = createLogger()

const store = configureStore({
    reducer: {
        photo: photoReducer,
        user: userReducer,
        page: pageReducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
export const AppDispatch = store.dispatch