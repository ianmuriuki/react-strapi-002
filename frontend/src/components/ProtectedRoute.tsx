import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * A route that redirects to the login page if the user is not authenticated.
 *
 * @example
 * import { ProtectedRoute } from './ProtectedRoute';
 *
 * <ProtectedRoute>
 *   <div>Content that is only accessible to authenticated users</div>
 * </ProtectedRoute>
 *
 * @param {{ children: React.ReactNode }} props The children to render if the user is authenticated
 * @returns {React.ReactNode} A React element that redirects to the login page if the user is not authenticated, or the children otherwise
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useSelector((state: RootState) => state.auth);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;