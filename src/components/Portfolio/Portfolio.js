/*
Contains:
    - Provide social media information
*/

import React, { Component } from "react";
import projects from "../../data/projects.js";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";

class PROJECT extends Component {
  render() {
    const { img, link } = this.props.Profile;

    return (
      <Nav.Link href={link} className=" d-inline-block m-2">
        <Image
          src={img}
          alt="social-media-profile"
          style={{ width: 40, height: 40 }}
        />
      </Nav.Link>
    );
  }
}

class PORTFOLIO extends Component {
  render() {
    return (
      <Container>
        <Row className=" text-center">
          <Col>
            {projects.map(profile => {
              return <PROJECT key={profile.id} Profile={profile} />;
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PORTFOLIO;
