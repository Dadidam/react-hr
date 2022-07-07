// npm packages
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Badge, Button } from "react-bootstrap";

// context providers
import { AppContext } from "../../context/AppContext";

const ReviewLog = () => {
  const { log } = useContext(AppContext);

  const renderBagde = () => {
    if (log && log.length > 0) {
      return <Badge bg="secondary">{log.length}</Badge>;
    }

    return null;
  };

  return (
    <Link to="/log">
      <Button variant="link">Review Log</Button>
      {renderBagde()}
    </Link>
  );
};

export default ReviewLog;
