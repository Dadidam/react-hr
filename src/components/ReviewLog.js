// npm packages
import React, { useContext } from "react";
import { Badge, Button } from "react-bootstrap";

// context providers
import { AppContext } from "../context/AppContext";

const ReviewLog = () => {
  const { log } = useContext(AppContext);

  const renderBagde = () => {
    if (log && log.length > 0) {
      return <Badge bg="secondary">{log.length}</Badge>;
    }

    return null;
  };

  return (
    <>
      <Button variant="link">Review Log</Button>&nbsp;
      {renderBagde()}
    </>
  );
};

export default ReviewLog;
