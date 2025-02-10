import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

/**
 * Profile component - displays the user's profile information.
 *
 * @remarks
 * This component retrieves the current user's data from the Redux store
 * and displays their avatar, username, email, and preferences. If the user
 * does not have an avatar, it shows the first letter of their username.
 * The component also includes sections for newsletter preferences and 
 * preferred categories.
 *
 * @returns The Profile component, or null if no user is logged in.
 */

const Profile: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  // If no user is logged in, return null
  if (!user) {
    return null;
  }

  // Render the profile information
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        Profile
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt={user.username}
              className="w-20 h-20 rounded-full"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-2xl text-gray-500 dark:text-gray-400">
                {user.username.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
          <div className="ml-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              {user.username}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Preferences
          </h3>
          <div className="space-y-4">
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={user.preferences.newsletter}
                  className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  readOnly
                />
                <span className="ml-2 text-gray-700 dark:text-gray-300">
                  Receive newsletter
                </span>
              </label>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Preferred Categories
              </h4>
              <div className="flex flex-wrap gap-2">
                {user.preferences.categories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;