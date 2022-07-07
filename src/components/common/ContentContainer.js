// npm packages
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// app components
import Logout from "./Logout";
import NavLogo from "./NavLogo";
import ReviewLog from "./ReviewLog";

const ContentContainer = ({ children }) => {
  return (
    <div className="dark content-container">
      <Container>
        <Row>
          <Col md={4} xs={12} className="text-center">
            <ReviewLog />
          </Col>
          <Col md={4} xs={6} className="text-center">
            <NavLogo />
          </Col>
          <Col md={4} xs={6} className="text-right">
            <Logout />
          </Col>
        </Row>
        <Row>
          <Col className="text-center content-container">{children}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContentContainer;
