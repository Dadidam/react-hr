// npm packages
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// CSS, styling rules
import "../Landing.css";

const Home = () => {
  return (
    <div className="landing dark">
      <header className="landing-header">
        <img src="images/octo-pic.png" className="landing-logo" alt="logo" />
        <p>Reactive HR</p>
        <Link to="/dashboard">
          <Button variant="outline-secondary" size="lg">
            GO!
          </Button>
        </Link>
      </header>
    </div>
  );
};

export default Home;
