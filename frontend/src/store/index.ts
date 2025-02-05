import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import themeReducer from './slices/themeSlice';
import articlesReducer from './slices/articlesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    articles: articlesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;