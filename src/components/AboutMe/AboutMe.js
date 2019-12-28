import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class AboutMe extends Component {
  render() {
    return (
      <section
        className="page-section"
        id="about"
        style={{
          // background: "rgba(255,216,120,0.80)",
          borderRadius: 25
          // boxShadow:
          //   "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
        <div className="container justify-content-center ">
          <div className="row">
            <div className="col-lg-12 text-center h-100">
              <h1 className="section-heading text-uppercase mt-5">About Me</h1>
              <p className="section-subheading text-muted">This is who I am.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMe;
