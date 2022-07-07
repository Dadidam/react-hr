// npm packages
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

// app components
import Icon from "./common/Icon";

const CandidateCard = () => {
  return (
    <Row xs={1} md={3} className="content-container">
      <Col md={4} className="btn-container-grid">
        <Button variant="danger" size="lg">
          <Icon code="thumbs-down" />
          REJECT
        </Button>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Img
            variant="top"
            src="https://randomuser.me/api/portraits/women/31.jpg"
          />
          <Card.Body>
            <Card.Title>Mathilde Pedersen</Card.Title>
            <Card.Text>mathilde.pedersen@example.com</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className="btn-container-grid">
        <Button variant="success" size="lg">
          <Icon code="thumbs-up" />
          ACCEPT
        </Button>
      </Col>
    </Row>
  );
};

export default CandidateCard;
