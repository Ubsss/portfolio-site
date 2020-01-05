import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Resume extends Component {
  state = {};
  render() {
    return (
      <Container>
        <section
          className="page-section"
          id="about"
          style={{
            borderRadius: 25
          }}
        >
          <div className="container justify-content-center ">
            <div className="row">
              <div className="col-lg-12 text-center h-100">
                <h1 className="section-heading text-uppercase mt-5">Resume</h1>
                <p className="section-subheading text-muted">
                  This is what I have done and my skill levels in HTMl, JS,
                  Design, Presentation, etc.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    );
  }
}

export default Resume;
