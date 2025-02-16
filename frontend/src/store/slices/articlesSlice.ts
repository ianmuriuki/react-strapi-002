import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { articleService } from '../../services/api';
import type { Article } from '../../types';

interface ArticlesState {
  items: Article[];
  featured: Article[];
  loading: boolean;
  error: string | null;
}

const initialState: ArticlesState = {
  items: [],
  featured: [],
  loading: false,
  error: null,
};

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async (params?: unknown) => {
    const response = await articleService.getArticles(params);
    return response;
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.data;
        // Filter featured articles using the correct Article type:
        state.featured = action.payload.data.filter((article: Article) => article.featured);
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch articles';
      });
  },
});

export default articlesSlice.reducer;
