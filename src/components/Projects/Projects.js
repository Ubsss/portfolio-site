import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Projects.css";
import { ProjectList } from "./projectsData.js";

class Project extends Component {
  render() {
    const { icon, name, description, link } = this.props.Item;
    return (
      <Card
        className="col-6 col-sm-6 col-md-6 col-lg-6 d-inline-block text-center "
        border="white"
        style={{
          borderRadius: 25,
          width: "14rem"
        }}
      >
        <Card.Img
          className="hover01"
          variant="top"
          src={icon}
          style={{ width: 140, height: 140 }}
        />
        <Card.Body>
          <Card.Text className="Card-text text-secondary">{name}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <Container
        className="Projects-section bg-white text-center p-4"
        id="projects"
      >
        <Row>
          <Col>
            <p className="Card-text text-secondary">
              A few of my favorite projects that made it to GitHub are below.
              Want to see more? Visit my{" "}
              <a
                href="https://github.com/Ubsss"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{" "}
              profile.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            {ProjectList.map(item => {
              return <Project key={item.id} Item={item} />;
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Projects;
