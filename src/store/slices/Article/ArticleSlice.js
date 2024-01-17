import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'https://helsinki-backender.org.kg/';

const initialState = {
  article: [],
  articleById: [],
};

export const getAticles = createAsyncThunk('article/getAticles', async (word) => {
  try {
    const response = await axios.get(`${API}articles/`, {
      params: {
        search: word
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});



export const getAticleById = createAsyncThunk('article/getAticleById', async (id) => {
  try {
    const response = await axios.get(`${API}articles/${id}/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});


const ArticleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAticles.rejected, (state, action) => {
        console.log('Error');
      })
      .addCase(getAticles.fulfilled, (state, action) => {
        state.article = action.payload;
      })
      .addCase(getAticleById.rejected, (state, action) => {
        console.log('Error');
      })
      .addCase(getAticleById.fulfilled, (state, action) => {
        state.articleById = action.payload;
      });
  }
  
});

// export const {  } = ArticleSlice.actions;
export default ArticleSlice.reducer;