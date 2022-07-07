// npm packages
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

// app components
import Icon from "./Icon";

const Logout = () => {
  return (
    <Link to="/">
      <Button className="btn" variant="outline-secondary" size="sm">
        <Icon code="right-from-bracket" />
        Logout
      </Button>
    </Link>
  );
};

export default Logout;
