// npm packages
import React, { useContext } from "react";
import { Button, Card, Col, Placeholder, Row } from "react-bootstrap";

// app components
import Icon from "./common/Icon";

// context providers
import { AppContext } from "../context/AppContext";

const CandidateCard = () => {
  const { profile } = useContext(AppContext);

  const renderCard = () => {
    if (!profile) {
      return (
        <Card>
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} />
            </Placeholder>
          </Card.Body>
        </Card>
      );
    }

    return (
      <Card>
        <Card.Img variant="top" src={profile.avatarURL} />
        <Card.Body>
          <Card.Title>{profile.fullName}</Card.Title>
          <Card.Text>{profile.email}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <Row xs={1} md={3} className="content-container">
      <Col md={4} className="btn-container-grid">
        <Button variant="danger" size="lg">
          <Icon code="thumbs-down" />
          REJECT
        </Button>
      </Col>
      <Col md={4}>{renderCard()}</Col>
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
