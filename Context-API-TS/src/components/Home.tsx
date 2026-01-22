import React from "react";
import { useAuth } from "../context/AuthContext";

const Home: React.FC = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="w-full max-w-md bg-white rounded shadow p-6 text-center mt-10">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Home Page</h1>
      {isAuthenticated ? (
        <p className="text-gray-700">Welcome, {user}! You are logged in.</p>
      ) : (
        <p className="text-gray-700">You are not logged in.</p>
      )}
    </div>
  );
};

export default Home;
