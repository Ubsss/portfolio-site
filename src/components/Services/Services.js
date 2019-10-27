/*
Contains:
    - Why
    - Problem
    - Solution
        - Service Main points
*/

import React, { Component } from "react";
import servicesFeature from "../../data/servicesData";
import Products from "../Products/Products";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import { updateSiteIsAwesome } from "../../actions/siteIsAwesomeActions";

class Service extends Component {
  render() {
    const { img, name, description, link } = this.props.coolFeature;
    return (
      <div
        className="col-12 col-sm-12 col-md-6 col-lg-3 d-inline-block  text-center"
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
            <a href={link}>
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

class Services extends Component {
  render() {
    return (
      <section
        className="page-section"
        id="services"
        style={{
          // background: "rgba(255,216,120,0.80)",
          borderRadius: 25
          // boxShadow:
          //   "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
        <div className="container justify-content-md-center ">
          <div className="row">
            <div
              className="col-lg-12 text-center h-100"
              style={{ height: 300 }}
            >
              <h2 className="section-heading text-uppercase mt-5">Services</h2>
              <p className="section-subheading text-muted">
                What makes us special.
              </p>
            </div>
          </div>
          <div className="row pb-4">
            {servicesFeature.map(feature => {
              return <Service key={feature.id} coolFeature={feature} />;
            })}
          </div>
        </div>
        <hr />
        <Products />
      </section>
    );
  }
}

// pass store to component as prop
const mapStateToProps = state => {
  return {
    siteIsAwesome: state.siteIsAwesome
  };
};

// allow component to manipulate store
const mapDispatchToProps = dispatch => {
  return {
    updateSiteIsAwesome: newVal => {
      dispatch(updateSiteIsAwesome(newVal));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Services);
