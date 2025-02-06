import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { AppDispatch, RootState } from '../store';
import { fetchArticles } from '../store/slices/articlesSlice';
 // import { Articles } from '../types';

// Home component - fetches articles from a redux store and displays them on the home page
const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: articles, featured, loading, error } = useSelector((state: RootState) => state.articles);

  // Fetch articles
  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  // Check if articles are loading
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Check if there is an error
  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        {error}
      </div>
    );
  }

  // Render the home page
  return (
    <div className="space-y-8">
      {/* Featured Articles */}
      {featured.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Featured Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((article) => (
              <Link
                key={article.id}
                to={`/article/${article.slug}`}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-blue-500">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                      <span>{article.author.name}</span>
                      <span>{format(new Date(article.publishedAt), 'MMM d, yyyy')}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Latest Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.slug}`}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-blue-500">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{article.author.name}</span>
                    <span>{format(new Date(article.publishedAt), 'MMM d, yyyy')}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;