import React, { Component } from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import "./Projects.css";
import { ProjectList } from "./projectsData.js";
import linkIcon from "./link.svg";

class Project extends Component {
  render() {
    const { icon, name, link } = this.props.Item;
    return (
      <Card
        className="col-5 col-sm-6 col-md-6 col-lg-6 d-inline-block text-center m-1 project projectImage"
        border="white"
        style={{
          borderRadius: 10,
          height: 200,
          backgroundImage: `url(${icon})`,
          width: "16rem"
        }}
      >
        <Card.Body className=" text-light overlay">
          <p>{name}</p>

          <Button variant="light" className=" btn details-button">
            <a href={link} target="_blank" rel="noopener noreferrer">
              Visit Project
              <Image
                src={linkIcon}
                alt="link icon"
                style={{ width: 15, height: 15 }}
              />
            </a>{" "}
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <Container
        className="Projects-section bg-white text-center pb-4"
        id="projects"
        fluid
      >
        <Row>
          <Col>
            <p className="Card-text text-secondary">
              A few of my favorite projects that made it to{" "}
              <a
                href="https://github.com/Ubsss"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <Image
                  src={linkIcon}
                  alt="link icon"
                  style={{ width: 15, height: 15 }}
                />
              </a>{" "}
              are below.
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
