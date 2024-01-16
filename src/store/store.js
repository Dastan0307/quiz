import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './slices/Article/ArticleSlice';

export default configureStore({
  reducer: {
    article: articleReducer,
  },
});