import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";
import SOCIAL from "../SocialMedia/SocialMedia";

class HEADER extends Component {
  render() {
    return (
      <Container className="Header-photo Header" fluid>
        <Row className=" h-100">
          <Col className="d-flex align-items-center justify-content-center text-center col-12 col-sm-12 col-md-6 col-lg-6  bg-white">
            <div>
              <h4 className="text-secondary">My name is</h4>
              <h1 className=" Header-name">Uchechukwu Uboh</h1>
              <h4 className="text-secondary">
                and I am a full-stack web developer.
              </h4>
              <SOCIAL />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HEADER;
