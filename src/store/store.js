import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './slices/Article/ArticleSlice';
import quizReducer from './slices/Quiz/quizSlice';
import questionsReducer from './slices/Questions/questionsSlice';

export default configureStore({
  reducer: {
    article: articleReducer,
    quiz: quizReducer,
    questions: questionsReducer,
  },
});