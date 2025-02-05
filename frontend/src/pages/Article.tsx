import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { articleService, commentService } from '../services/api';
import type { Article as ArticleType, Comment } from '../types';

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<ArticleType | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        if (slug) {
          const data = await articleService.getArticle(slug);
          setArticle(data);
          const commentsData = await commentService.getComments(data.id);
          setComments(commentsData);
        }
      } catch (err) {
        setError('Failed to load article');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="text-center text-red-500 py-8">
        {error || 'Article not found'}
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          {article.title}
        </h1>
        <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
          <div className="flex items-center">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-10 h-10 rounded-full mr-2"
            />
            <span>{article.author.name}</span>
          </div>
          <span>•</span>
          <time>{format(new Date(article.publishedAt), 'MMMM d, yyyy')}</time>
        </div>
      </header>

      <img
        src={article.coverImage}
        alt={article.title}
        className="w-full h-[400px] object-cover rounded-lg mb-8"
      />

      <div
        className="prose dark:prose-invert max-w-none mb-8"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Comments ({comments.length})
        </h2>
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
            >
              <div className="flex items-center mb-2">
                <img
                  src={comment.user.avatar}
                  alt={comment.user.username}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <div className="font-semibold text-gray-800 dark:text-white">
                    {comment.user.username}
                  </div>
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    {format(new Date(comment.createdAt), 'MMM d, yyyy')}
                  </time>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{comment.content}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default Article;