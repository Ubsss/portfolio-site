/*
Contains:
    - Provide social media information
*/

import React, { Component } from "react";
import social from "../../data/socialMediaData";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";

class Profile extends Component {
  render() {
    const { img, link } = this.props.Profile;
    return (
      <Nav.Link href={link} className="d-inline-block m-1 p-1">
        <Image
          src={img}
          alt="social-media-profile"
          style={{ width: 25, height: 25 }}
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
              {social.map(profile => {
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
