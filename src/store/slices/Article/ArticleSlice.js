import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'https://tokyo-backender.org.kg/';

const initialState = {
  article: [],
};

export const getAticles = createAsyncThunk('article/getAticles', async (page) => {
  try {
    const response = await axios.post(`${API}articles/`, {
      params: {
        page: page,
      }
    });
    return response.data;
  } catch (error) {
    localStorage.clear();
    throw error; 
  }
});


const ArticleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAticles.rejected, (_state, _action) => {
        console.log('Error');
      })
      .addCase(getAticles.fulfilled, (state, action) => {
        state.article = action.payload;
      });
  }
});

// export const {  } = ArticleSlice.actions;
export default ArticleSlice.reducer;