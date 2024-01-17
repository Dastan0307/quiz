import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'https://helsinki-backender.org.kg/';

const initialState = {
    questions: [],
    answers: [],
};

export const getQuestions = createAsyncThunk('questions/getQuestions', async () => {
  try {
    const response = await axios.get(`${API}questions/`);
    return response.data;
  } catch (error) {
    localStorage.clear();
    throw error; 
  }
});


export const getAnswers = createAsyncThunk('questions/getAnswers', async () => {
  try {
    const response = await axios.get(`${API}answers/`);
    return response.data;
  } catch (error) {
    localStorage.clear();
    throw error; 
  }
});



const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.rejected, (state, action) => {
        console.log('Error');
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        state.questions = action.payload;
      })
      .addCase(getAnswers.fulfilled, (state, action) => {
        state.answers = action.payload;
      })
  }
});

// export const {  } = questionsSlice.actions;
export default questionsSlice.reducer;