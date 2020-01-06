/*
Contains:
    - Provide social media information
*/

import React, { Component } from "react";
import Social from "../../data/socialMediaData";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";

class Profile extends Component {
  render() {
    const { img, link } = this.props.Profile;
    return (
      <Nav.Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="d-inline-block m-1 p-1"
      >
        <Image
          src={img}
          alt="social-media-profile"
          style={{ width: 30, height: 30 }}
        />
      </Nav.Link>
    );
  }
}

class SocialMediaProfiles extends Component {
  render() {
    return (
      <section className="page-section" style={{ borderRadius: 25 }}>
        <Container>
          <Row className="text-center">
            <Col>
              {Social.map(profile => {
                return <Profile key={profile.id} Profile={profile} />;
              })}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default SocialMediaProfiles;
