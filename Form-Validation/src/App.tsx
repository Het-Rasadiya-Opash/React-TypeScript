import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <nav className="flex gap-4 mb-6">
          <NavLink to="/login" className="text-blue-600 hover:underline">
            Login
          </NavLink>
          <NavLink to="/signup" className="text-blue-600 hover:underline">
            Signup
          </NavLink>
        </nav>

        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="*" element={<LoginForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
