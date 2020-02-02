import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Skills.css";
import { ToolsandSkills } from "./skillsData";

class Skill extends Component {
  render() {
    const { icon, name, description } = this.props.Item;
    return (
      <Card
        className="col-6 col-sm-6 col-md-6 col-lg-6 d-inline-block text-center "
        border="white"
        style={{
          borderRadius: 25,
          width: "10rem"
          // boxShadow:
          //   "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
        <Card.Img variant="top" src={icon} style={{ width: 80, height: 80 }} />
        <Card.Body>
          <Card.Text className="Card-text text-secondary">{name}</Card.Text>
          {/* <Card.Text className="text-secondary"> {description}</Card.Text> */}
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
            <h1 className="section-heading Skills-section-heading">Skills</h1>
            <p className="Card-text text-secondary">
              Here are some of the major skills and tools I picked up over the
              years. Want to see more? Visit my{" "}
              <a
                href="https://www.linkedin.com/in/uchechukwu-uboh-31030196/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
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
