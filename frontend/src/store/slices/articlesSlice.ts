import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { articleService } from '../../services/api';
import type { Article } from '../../types';

// Articles state
interface ArticlesState {
  items: Article[];
  featured: Article[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: ArticlesState = {
  items: [],
  featured: [],
  loading: false,
  error: null,
};

// Fetch articles
export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async (params?: any) => {
    const response = await articleService.getArticles(params);
    return response;
  }
);

// Articles slice 
const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
/**
 * Handles the different states of the fetchArticles async action.
 * - On pending: Sets loading to true and clears any existing error.
 * - On fulfilled: Sets loading to false, updates the items and featured articles.
 * - On rejected: Sets loading to false and records the error message.
 */

  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.data;
        console.log(state.items)
        state.featured = action.payload.data.filter((article: ArticlesState) => article.featured);
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch articles';
      });
  },
});

export default articlesSlice.reducer;