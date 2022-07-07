import React from "react";
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link to="/dashboard">
      <img src="images/octo-pic.png" className="dashboard-logo" alt="logo" />
    </Link>
  );
};

export default NavLogo;
