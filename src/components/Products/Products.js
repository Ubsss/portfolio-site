/*
Contains: 
    - Machine and app details
 */

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import product from "../../data/productData";

class Teachnology extends Component {
  render() {
    const { img, link, name, description } = this.props.coolTech;
    return (
      <div
        className="col-12 col-sm-12 col-md-6 col-lg-6 d-inline-block  text-center"
        style={{
          borderRadius: 25,
          height: 300,
          width: 150
          //   boxShadow:
          //     "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
        <div>
          <div>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img
                style={{
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }}
                className="img-thumbnail rounded m-2"
                src={img}
                alt="features"
              />
            </a>
          </div>

          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

class Technologies extends Component {
  render() {
    return (
      <div className="container justify-content-md-center ">
        <div className="row">
          <div className="col-lg-12 text-center h-100" style={{ height: 300 }}>
            <p className="section-subheading text-muted">
              Our revolutionary product.
            </p>
          </div>
        </div>
        <div className="row pb-4">
          {product.map(tech => {
            return <Teachnology key={tech.id} coolTech={tech} />;
          })}
        </div>
      </div>
    );
  }
}

export default Technologies;
