import React, { Component } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import profilePhoto from "./profilePhoto.jpeg";
import linkIcon from "./link.svg";
import "./AboutMe.css";

class AboutMe extends Component {
  render() {
    return (
      <Container
        className="About-me-section bg-white text-center my-5 p-4"
        id="about"
      >
        <Row>
          <Col className="col-12 d-block d-md-none  d-flex justify-content-center pb-4">
            <Card style={{ width: "20rem" }}>
              <Card.Img
                className="profile-image"
                as={Image}
                variant="top"
                src={profilePhoto}
                rounded
              />
            </Card>
          </Col>
          <Col className="col-12">
            <p className="Card-title">
              Hello, I'm Uchechukwu. It is a pleasure to meet you!
            </p>
            <p className="Card-text text-secondary">
              Since I began developing nearly 4 years ago, I have had the
              pleasure of working on some incredible projects with amazing
              people. Having worked on ideas ranging from embedded systems to
              web applications, I noticed a common theme, user experience is
              key! As a developer, designer or mentor, the customer experience
              is always paramount. This is why I co-founded{" "}
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
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutMe;
