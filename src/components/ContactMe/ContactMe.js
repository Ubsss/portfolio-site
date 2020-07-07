import React, { Component } from "react";
import { Container, Image, Form, Button, Row, Col } from "react-bootstrap";
import linkIcon from "./link.svg";
import "./ContactMe.css";

class ContactMe extends Component {
  render() {
    return (
      <Container
        className="justify-content-center text-center my-5 p-4"
        id="contact"
      >
        <Row>
          <Col>
            <h1 className="text-center Contact-me-section-heading">
              Contact Me
            </h1>
            <p className="Card-text text-secondary">
              Interested in working together, need a web site or mobile app, or
              want to inquire about pricing? Feel free to message me via Full
              Stock Development.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              href="https://fullstockdevelopment.com/#contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline-secondary"
                className="btn Form-button"
                type="button"
                onClick={this.handleMessageResend}
              >
                Reach Out
                <Image
                  src={linkIcon}
                  alt="link icon"
                  style={{ width: 15, height: 15 }}
                />
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContactMe;
