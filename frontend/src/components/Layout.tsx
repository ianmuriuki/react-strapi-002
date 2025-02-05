import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Sun, Moon } from 'lucide-react';
import { toggleTheme } from '../store/slices/themeSlice';
import Navbar from './Navbar';
import Footer from './Footer';
import type { RootState } from '../store';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => dispatch(toggleTheme())}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;