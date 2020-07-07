import React, { Component } from "react";
import { Container, Row, Col, Button, Card, Modal } from "react-bootstrap";
import "./Header.css";
import SOCIAL from "../SocialMedia/SocialMedia";

class HEADER extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, fadeOut: false };
  }

  render() {
    const handleClose = () => {
      this.setState({ showModal: false, fadeOut: false });
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
              <Button
                size="lg"
                variant="outline-white"
                className=" btn Form-button"
                onClick={handleShow}
              >
                View Resume
              </Button>
            </div>

            <Modal
              show={this.state.showModal}
              onHide={handleClose}
              dialogClassName="Modal-card"
              aria-labelledby="resume-title"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="resume-title" className="Modal-card-header">
                  Resume
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="w-100 h-100">
                <iframe
                  title="resume"
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-site-8e4f6.appspot.com/o/resume%2FUchechukwu_Uboh.pdf?alt=media&token=4f655bc0-7109-4fef-a6ff-769e7fa7f835"
                  className="w-100 h-100"
                />
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HEADER;
