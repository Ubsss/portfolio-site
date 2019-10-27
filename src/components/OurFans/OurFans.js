/*
Contains:
    - Partners
    - Supporters
*/

import React, { Component } from "react";
import fans from "../../data/ourFansData.js";
import "bootstrap/dist/css/bootstrap.css";

class Fan extends Component {
  render() {
    const { img, link } = this.props.partnerships;

    return (
      <div
        className="col col-sm-4 col-6 col-lg-2 justify-content-center align-items-center "
        style={{
          borderRadius: 25
        }}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            className="img-thumbnail rounded m-2 "
            src={img}
            alt="social-profiles"
          />
        </a>
      </div>
    );
  }
}

class Fans extends Component {
  render() {
    return (
      <div className="container justify-content-center ">
        <div className="row">
          <div className="col-lg-12 text-center h-100" style={{ height: 300 }}>
            <p className="section-subheading text-muted">Some of our fans.</p>
          </div>
        </div>
        <div className="row pb-4">
          {fans.map(partner => {
            return <Fan key={partner.id} partnerships={partner} />;
          })}
        </div>
      </div>
    );
  }
}

export default Fans;
