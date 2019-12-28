/* 
Contains:
    - Form
        - Emails us their message
        - Emails them thank you for contacting us
        - Fields
            - Name, email, message and submit button
*/

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

class ContactMe extends Component {
  render() {
    return (
      <section
        className="page-section"
        id="contact"
        style={{
          // background: "rgba(255,216,120,0.80)",
          borderRadius: 25
          // boxShadow:
          //   "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
        <Container className="justify-content-center text-center">
          <h1 className="section-heading text-uppercase mt-5">Contact Me</h1>
          <p className="section-subheading text-muted">
            Let me know how I could help you.
          </p>
          <Row>
            <Col lg="6" className="text-center h-100">
              <Form>
                <Form.Group controlId="formName">
                  <Form.Control
                    type="email"
                    placeholder="Your Name"
                    size="lg"
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Control
                    type="password"
                    placeholder="Your Email"
                    size="lg"
                  />
                </Form.Group>
                <Form.Group controlId="formPhone">
                  <Form.Control
                    type="phone"
                    placeholder="Your Phone"
                    size="lg"
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col lg="6" className="text-center h-100">
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  rows="6"
                  placeholder="Your Message"
                  size="lg"
                />
              </Form.Group>
            </Col>
          </Row>
          {/* Might want to put the button in the form for submission */}
          <Button variant="secondary" type="submit">
            Message Us
          </Button>
        </Container>
      </section>
    );
  }
}

export default ContactMe;
