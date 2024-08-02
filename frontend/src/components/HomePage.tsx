import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-indigo-600 text-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            <Link to="/" className="hover:underline">User Management System</Link>
          </h1>
          <nav className="flex space-x-4">
            <Link to="/" className="hover:bg-indigo-700 px-4 py-2 rounded-md transition duration-300">Home</Link>
            <Link to="/login" className="hover:bg-indigo-700 px-4 py-2 rounded-md transition duration-300">Login</Link>
            <Link to="/register" className="hover:bg-indigo-700 px-4 py-2 rounded-md transition duration-300">Register</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center bg-white">
        <div className="text-center p-8 max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Welcome to the User Management System</h2>
          <p className="text-lg text-gray-600 mb-8">
            Manage users efficiently with our powerful platform. Sign up or log in to get started.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/login" className="bg-indigo-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 transition duration-300">
              Login
            </Link>
            <Link to="/register" className="bg-indigo-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 transition duration-300">
              Register
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Created by Sourabh. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
