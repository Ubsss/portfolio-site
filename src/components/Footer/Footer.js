import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import linkIcon from "./link.svg";

class FOOTER extends Component {
  render() {
    return (
      <Container fluid sticky="bottom" className="bg-light text-dark p-4">
        <Row className="text-center">
          <Col>
            Designed and built with &#9825; by{" "}
            <a
              href="https://fullstockdevelopment.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Full Stock Development
              <Image
                src={linkIcon}
                alt="link icon"
                style={{ width: 15, height: 15 }}
              />
            </a>{" "}
            .
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FOOTER;
