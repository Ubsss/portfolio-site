import React, { Component } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "./Header.css";
import SOCIAL from "../SocialMedia/SocialMedia";
import linkIcon from "./link.svg";

class HEADER extends Component {
  render() {
    return (
      <Container className="Header-photo Header mb-4" id="about" fluid>
        <Row className=" h-100">
          <Col className="d-flex align-items-center justify-content-center text-center col-12 col-sm-12 col-md-6 col-lg-6  bg-white">
            <div>
              <h1 className=" Header-name">
                Full-Stack Developer, UX Designer and Mentor
              </h1>
              <h4 className="text-secondary">
                I design, build and deploy exciting customer experiences.
              </h4>
              <SOCIAL />
              <Button
                // size="lg"
                variant="outline-secondary"
                className=" btn Form-button"
                onClick={this.handleDownloadEvent}
              >
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/portfolio-site-8e4f6.appspot.com/o/resume%2FUchechukwu_Uboh.pdf?alt=media&token=4f655bc0-7109-4fef-a6ff-769e7fa7f835"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                  <Image
                    src={linkIcon}
                    alt="link icon"
                    style={{ width: 15, height: 15 }}
                  />
                </a>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HEADER;
