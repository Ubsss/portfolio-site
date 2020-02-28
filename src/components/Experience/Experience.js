import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Experience.css";
import { ExperienceList } from "./experienceData";
import linkIcon from "./link.svg";
import rightArrow1 from "./rightArrow1.svg";
class Event extends Component {
  render() {
    const { period, year, accomplishment, organization } = this.props.Item;
    return (
      <Row>
        <Col className="col-5  d-inline-block text-right  text-secondary mt-0 Card-title">
          {year}
        </Col>
        <Col className="col-1  d-inline-block text-center  mt-1">
          <Image
            src={rightArrow1}
            style={{ width: 25, height: 25 }}
            roundedCircle
          />
        </Col>
        <Col className="col-5  d-inline-block text-left text-secondary">
          <p>
            <span className="Card-title">{accomplishment}</span>
            <br />
            {organization}
            <br />
            {period}
          </p>
        </Col>
      </Row>
    );
  }
}

class Experience extends Component {
  render() {
    return (
      <Container
        className="Skills-section bg-white text-center p-4 my-5 justify-content-center align-center {
          height: 800px;
        }"
        id="experience"
      >
        <Row>
          <Col>
            <h1 className="section-heading Skills-section-heading">
              Experience
            </h1>
            <p className="Card-text text-secondary">
              A brief overview of my journey so far. Checkout my{" "}
              <a
                href="https://www.linkedin.com/in/uchechukwu-uboh-31030196/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
                <Image
                  src={linkIcon}
                  alt="link icon"
                  style={{ width: 15, height: 15 }}
                />
              </a>{" "}
              profile for more.
            </p>
          </Col>
        </Row>

        {ExperienceList.map(item => {
          return <Event key={item.id} Item={item} />;
        })}
      </Container>
    );
  }
}

export default Experience;
