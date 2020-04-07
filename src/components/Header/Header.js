import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Card,
  ResponsiveEmbed,
} from "react-bootstrap";
import "./Header.css";
import SOCIAL from "../SocialMedia/SocialMedia";
import resume from "./Uchechukwu_Uboh.pdf";

class HEADER extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, fadeOut: false };
  }

  render() {
    const handleClose = () => {
      this.setState({ fadeOut: true });
      setTimeout(this.setState({ showModal: false, fadeOut: false }), 1000);
    };
    const handleShow = (e) => {
      e.preventDefault();
      this.setState({ showModal: true });
    };

    return (
      <Container className="Header-photo Header  mb-5" fluid>
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

              <a
                href="https://firebasestorage.googleapis.com/v0/b/portfolio-site-8e4f6.appspot.com/o/resume%2FUchechukwu_Uboh.pdf?alt=media&token=4f655bc0-7109-4fef-a6ff-769e7fa7f835"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline-white"
                  className=" btn Form-button"
                  onClick={handleShow}
                >
                  View Resume
                </Button>
              </a>
            </div>

            <Card
              hidden={this.state.showModal ? false : true}
              show={this.state.showModal}
              onHide={handleClose}
              className={
                this.state.showModal === true && this.state.fadeOut === false
                  ? "text-center Modal-card fade-in"
                  : "text-center Modal-card  fade-out"
              }
            >
              {/* <ResponsiveEmbed className="Modal-resume">
                <embed type="image/svg+xml" src={resume} />
              </ResponsiveEmbed> */}
              <iframe
                title="resume"
                type="image/svg+xml"
                src={resume}
                className="Modal-resume"
              />
              <Card.Footer className="text-muted">
                <Button
                  variant="outline-white"
                  className="btn Form-button"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HEADER;
