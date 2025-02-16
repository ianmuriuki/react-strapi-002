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
    const response = await api.get('/articles/', { params });
    
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

// Auth service
export const authService = {
  /**
   * Authenticates a user.
   *
   * @param {string} email - Email address of the user to login.
   * @param {string} password - Password of the user to login.
   * @returns {Promise<any>} A promise that resolves with the response data of the login request.
   * @throws If the request fails.
   * @async
   */
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

  /**
   * Retrieves the current user.
   *
   * @returns The current user
   * @throws If the user is not logged ina
   */
  getCurrentUser: async () => {
    const response = await api.get('/users/me');
    return response.data;
  },
};

export const commentService = {
/**
 * Adds a comment to a specific article.
 *
 * @param {string} articleId - The ID of the article to which the comment is being added.
 * @param {string} content - The content of the comment.
 * @returns {Promise<any>} A promise that resolves with the response data of the added comment.
 * @throws Will throw an error if the request fails.
 */

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