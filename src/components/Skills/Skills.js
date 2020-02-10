import React, { Component } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "./Skills.css";
import { ToolsandSkills } from "./skillsData";
import linkIcon from "./link.svg";

class Skill extends Component {
  render() {
    const { icon, name } = this.props.Item;
    return (
      <Card
        className="col-6 col-sm-6 col-md-6 col-lg-6 d-inline-block text-center "
        border="white"
        style={{
          borderRadius: 25,
          width: "10rem"
        }}
      >
        <Card.Img variant="top" src={icon} style={{ width: 80, height: 80 }} />
        <Card.Body>
          <Card.Text className="Card-text text-secondary">{name}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

class Skills extends Component {
  render() {
    return (
      <Container
        className="Skills-section bg-white text-center p-4"
        id="skills"
      >
        <Row>
          <Col>
            <h1 className=" Skills-heading">Skills</h1>
            <p className="Card-text text-secondary">
              Here are some of the major skills and tools I picked up over the
              years. Want to see more? Visit my{" "}
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
              profile.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            {ToolsandSkills.map(item => {
              return <Skill key={item.id} Item={item} />;
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Skills;
