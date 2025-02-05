import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">About NewsHub</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your trusted source for the latest news and in-depth reporting.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/politics" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                  Politics
                </Link>
              </li>
              <li>
                <Link to="/category/technology" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/category/sports" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/category/entertainment" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                  Entertainment
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} NewsHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;