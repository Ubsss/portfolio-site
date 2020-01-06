import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./AboutMe.css";
import AboutMeItems from "../../data/aboutMeData.js";

class About extends Component {
  render() {
    const { icon, name, description } = this.props.Item;
    return (
      <Card
        className="col-12 col-sm-12 col-md-6 col-lg-3 d-inline-block  text-center pt-2 m-1"
        border="white"
        style={{
          borderRadius: 25,
          width: "14rem"
          // boxShadow:
          //   "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
        <Card.Img
          variant="top"
          src={icon}
          style={{ width: 100, height: 100 }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="text-muted">{description}</Card.Subtitle>
        </Card.Body>
      </Card>
    );
  }
}

class AboutMe extends Component {
  render() {
    return (
      <Container
        className="About-me-section bg-white text-center"
        id="about"
        fluid
      >
        <Row>
          <Col>
            <h1 className="section-heading About-me-section-heading">
              About Me
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            {AboutMeItems.map(item => {
              return <About key={item.id} Item={item} />;
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutMe;
