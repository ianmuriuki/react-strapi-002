// User related types
export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  categories: string[];
  newsletter: boolean;
}

// Article related types
export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author: Author;
  publishedAt: string;
  likes: number;
  comments: Comment[];
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
}

export interface Comment {
  id: string;
  content: string;
  user: User;
  createdAt: string;
}