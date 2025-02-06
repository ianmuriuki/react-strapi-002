import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import the Router
import { Provider } from 'react-redux'; // Import the Provider
import { store } from './store'; // Import your Redux store
import Layout from './components/Layout'; // Import the Layout component
import Home from './components/pages/Home'; // Import the Home component
import Article from './components/pages/Article'; // Import the Article component
import Login from './components/pages/Login'; // Import the Login component
import Register from './components/pages/Register'; // Import the Register component
import Profile from './components/pages/Profile'; // Import the Profile component
import ProtectedRoute from './components/ProtectedRoute'; //  Import the ProtectedRoute component

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/article/:slug" element={<Article />} /> // 
            <Route path="/login" element={<Login />} /> 
            <Route path="/register" element={<Register />} /> 
            <Route
              path="/profile" // Add a route for the Profile page
              element={
                <ProtectedRoute>
                  <Profile /> 
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;