import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="w-full max-w-md bg-white rounded shadow p-6 text-center mt-10">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Home Page</h1>
      {isAuthenticated ? (
        <p className="text-gray-700">Welcome, {user}! You are logged in.</p>
      ) : (
        <>
          <p className="text-gray-700">You are not logged in.</p>
          <button
            onClick={() => navigate("/login")}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Go to Login
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
