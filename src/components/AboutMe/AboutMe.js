import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutMe.css";

class AboutMe extends Component {
  render() {
    return (
      <Container
        className="About-me-section bg-white text-center p-4"
        id="about"
      >
        <Row>
          <Col>
            <p className="Card-title">
              Hello, I'm Uchechukwu. It is a pleasure to meet you!
            </p>
            <p className="Card-text text-secondary">
              Since I began developing nearly 4 years ago, I have had the
              pleasure of working on some incredible projects with amazing
              people. Having worked on ideas ranging from embedded systems to
              web applications, I noticed a common theme, user experience is
              key! As a developer, designer or mentor, the customer experience
              is always paramount.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutMe;
