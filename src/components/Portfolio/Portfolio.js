/*
Contains:
    - Provide social media information
*/

import React, { Component } from "react";
import projects from "../../data/portfolioData.js";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ButtonToolbar
} from "react-bootstrap";

class PROJECT extends Component {
  render() {
    const { img, name, description } = this.props.Profile;

    return (
      <Card className="d-inline-block m-1 d-inline-block  text-center">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

class PORTFOLIO extends Component {
  render() {
    return (
      <section
        className="page-section"
        id="portfolio"
        style={{ borderRadius: 25 }}
      >
        <Container className="justify-content-center">
          <Row>
            <Col className="text-center">
              <h1 className="section-heading text-uppercase mt-5 text-dark">
                Portfolio
              </h1>
              <p className="section-subheading text-secondary">
                Some of our work.
              </p>
            </Col>
          </Row>
          <Row className=" text-center">
            <Col>
              {projects.map(profile => {
                return <PROJECT key={profile.id} Profile={profile} />;
              })}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default PORTFOLIO;
