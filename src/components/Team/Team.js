/* contains:
    - Photo, name, tile for all team members
*/
import React, { Component } from "react";
import team from "../../data/teamData.js";
import { Image, Container, Row, Col } from "react-bootstrap";

class TEAMMEMBER extends Component {
  render() {
    const { img, name, description } = this.props.person;
    return (
      <Col
        xs={4}
        md={3}
        lg={2}
        className="d-inline-block text-center m-2 text-secondary"
        style={{
          borderRadius: 150,
          width: 150
        }}
      >
        <Image src={img} alt={`${name}-image`} thumbnail roundedCircle />
        <strong>{name}</strong>
        <p>{description}</p>
      </Col>
    );
  }
}

class TEAM extends Component {
  render() {
    return (
      <section className="page-section" id="team" style={{ borderRadius: 25 }}>
        <Container className="justify-content-center">
          <Row>
            <Col className="text-center">
              <h1 className="section-heading text-uppercase mt-5 text-dark">
                Team
              </h1>
              <p className="section-subheading text-secondary">
                Meet the team.
              </p>
            </Col>
          </Row>
          <Row className="pb-4 pt-2 justify-content-center">
            {team.map(member => {
              return <TEAMMEMBER key={member.id} person={member} />;
            })}
          </Row>
        </Container>
      </section>
    );
  }
}

export default TEAM;
