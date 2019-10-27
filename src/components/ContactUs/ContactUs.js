/* 
Contains:
    - Form
        - Emails us their message
        - Emails them thank you for contacting us
        - Fields
            - Name, email, message and submit button
*/

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Contact extends Component {
  render() {
    return (
      <section
        className="page-section"
        id="contact"
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
              <h1 className="section-heading text-uppercase mt-5">
                Contact Us
              </h1>
              <p className="section-subheading text-muted">
                Let us know what you think.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
