import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class FOOTER extends Component {
  render() {
    return (
      <Container fluid sticky="bottom" className="bg-light text-dark p-4">
        <Row className="text-center">
          <Col>
            Copyright © Full-Stock Development 2019. Designed by{" "}
            <a
              href="https://www.linkedin.com/in/uchechukwu-uboh-31030196/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Uchechukwu Uboh
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FOOTER;
