import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink> |{" "}
        <NavLink to="/dashboard">Dashboard</NavLink> |{" "}
        <NavLink to="/profile/admin">Profile</NavLink>
      </nav>
    </>
  );
};

export default Header;
