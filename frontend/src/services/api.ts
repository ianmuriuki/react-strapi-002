import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_STRAPI_API_URL, //strapi api url
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// API service functions
export const articleService = {
// 
  getArticles: async (params?: any) => {
    const response = await api.get('/articles', { params });
    return response.data;
  },
// get a single article
  getArticle: async (slug: string) => {
    const response = await api.get(`/articles/${slug}`);
    return response.data;
  },

  likeArticle: async (id: string) => {
    const response = await api.post(`/articles/${id}/like`);
    return response.data;
  },
};

export const authService = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/local', {
      identifier: email,
      password,
    });
    return response.data;
  },

  register: async (username: string, email: string, password: string) => {
    const response = await api.post('/auth/local/register', {
      username,
      email,
      password,
    });
    return response.data;
  },

  getCurrentUser: async () => {
    const response = await api.get('/users/me');
    return response.data;
  },
};

export const commentService = {
  addComment: async (articleId: string, content: string) => {
    const response = await api.post(`/comments`, {
      article: articleId,
      content,
    });
    return response.data;
  },

  getComments: async (articleId: string) => {
    const response = await api.get(`/comments`, {
      params: { article: articleId },
    });
    return response.data;
  },
};