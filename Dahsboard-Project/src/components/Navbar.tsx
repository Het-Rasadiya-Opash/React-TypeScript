import { useAuth } from "../context/AuthContext";
import React from "react";

const Navbar:React.FC = () => {
  const { logout, role } = useAuth();

  return (
    <div className="flex justify-between p-4 bg-gray-800 text-white dark:bg-gray-900">
      <h1 className="font-bold">{role?.toUpperCase()} DASHBOARD</h1>
      <div className="space-x-4">
        <button onClick={logout} className="text-red-400">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
