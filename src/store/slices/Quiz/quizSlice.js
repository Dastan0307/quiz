import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'https://helsinki-backender.org.kg/';

const initialState = {
  quiz: [],
  quizById: [],
};

export const getQuizes = createAsyncThunk('quiz/getQuizes', async () => {
  try {
    const response = await axios.get(`${API}quiz/`);
    return response.data;
  } catch (error) {
    localStorage.clear();
    throw error; 
  }
});

export const getQuizeById = createAsyncThunk('quiz/getQuizeById', async (id) => {
  try {
    const response = await axios.get(`${API}quiz-w/${id}/`);
    return response.data;
  } catch (error) {
    localStorage.clear();
    throw error; 
  }
});


const quizSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuizes.rejected, (state, action) => {
        console.log('Error');
      })
      .addCase(getQuizes.fulfilled, (state, action) => {
        state.quiz = action.payload;
      })
      .addCase(getQuizeById.rejected, (state, action) => {
        console.log('Error');
      })
      .addCase(getQuizeById.fulfilled, (state, action) => {
        state.quizById = action.payload;
      });
  }
});

// export const {  } = quizSlice.actions;
export default quizSlice.reducer;