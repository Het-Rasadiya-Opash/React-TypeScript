import React from "react";
import { useNavigate } from "react-router-dom";
const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Dashboard</h1>
      <button onClick={() => navigate("/profile/admin")}>Go to Profile</button>
    </div>
  );
};

export default Dashboard;
