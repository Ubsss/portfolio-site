import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class FOOTER extends Component {
  render() {
    return (
      <Container fluid sticky="bottom" className="bg-light text-dark p-4">
        <Row className="text-center">
          <Col>Copyright © Full-Stock Development 2019</Col>
        </Row>
      </Container>
    );
  }
}

export default FOOTER;
