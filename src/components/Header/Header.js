import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Header.css";
import profilePhoto from "../../assets/profilePhoto.jpeg";
import SOCIAL from "../SocialMedia/SocialMedia";

class HEADER extends Component {
  render() {
    return (
      <Container className="Header-photo Header" fluid>
        <Row className=" h-100 align-middle">
          <Col className="text-center  col-sm-6 col-md-6 col-lg-6  bg-light ">
            <h4 className="text-secondary Header-text">Hello. My name is</h4>
            <h1 className=" Header-name">Uchechukwu Uboh.</h1>
            <h4 className="text-secondary">
              I am your one-stop-shop for full-stack web and mobile applications
              solutions.
            </h4>

            <SOCIAL />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HEADER;
