import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Header.css";
import SOCIAL from "../SocialMedia/SocialMedia";
import { storage } from "../../firebase";
import axios from "axios";
import downloader from "js-file-download";

class HEADER extends Component {
  // trigger resume download
  handleDownloadEvent = e => {
    // storage.refFromURL(process.env.REACT_APP_RESUME_URL);
    let imgLoc = storage.ref(process.env.REACT_APP_RESUME_URL);

    imgLoc
      .child("Uchechukwu_Uboh.pdf")
      .getDownloadURL()
      .then(url => {
        axios
          .get(url)
          .then(data => {
            downloader(data.data, "Uchechukwu_uboh.pdf");
            // console.log(data);
          })
          .catch(err => {
            throw {
              error: {
                message: err.message
              }
            };
          });
      })
      .catch(err => {
        console.log(err);
      });

    // imgLoc
    //   .child(process.env.REACT_APP_RESUME_URL)
    //   .getDownloadURL()
    //   .then(url => {
    //     console.log(url);
    //   });
  };

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
                Download Resume
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HEADER;
