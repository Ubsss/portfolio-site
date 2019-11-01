import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class HEADER extends Component {
  render() {
    return (
      <Container
        fluid
        style={{
          height: 820
        }}
      >
        <Row className="text-center h-100">
          <Col className="my-auto">
            <h1 className="text-secondary text-uppercase">
              Welcome to Full-Stock Development Solutions.
            </h1>
            <p className="text-dark">
              Your one-stop-shop for web and mobile applications.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HEADER;
