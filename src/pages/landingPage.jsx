import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import HEADER from "../components/Header/Header";
import FOOTER from "../components/Footer/Footer.js";
import ContactMe from "../components/ContactMe/ContactMe";
import NAVBAR from "../components/NavBar/NavBar";
import ABOUTME from "../components/AboutMe/AboutMe";

class LANDINGPAGE extends Component {
  render() {
    return (
      <>
        <NAVBAR />
        <HEADER />
        <hr />
        <ABOUTME />
        <hr />
        <ContactMe />
        <hr />
        <FOOTER />
      </>
    );
  }
}
export default LANDINGPAGE;
