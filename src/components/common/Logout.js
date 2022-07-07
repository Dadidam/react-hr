import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Logout = () => {
  return (
    <Link to="/">
      <Button className="btn" variant="outline-secondary" size="sm">
        <i className="fa-solid fa-right-from-bracket"></i>Logout
      </Button>
    </Link>
  );
};

export default Logout;
