import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import HEADER from "../components/Header/Header";
import FOOTER from "../components/Footer/Footer.js";
import ContactMe from "../components/ContactMe/ContactMe";
import NAVBAR from "../components/NavBar/NavBar";
import ABOUTME from "../components/AboutMe/AboutMe";
import SKILL from "../components/Skills/Skills";

class LANDINGPAGE extends Component {
  render() {
    return (
      <>
        <NAVBAR />
        <HEADER />
        <ABOUTME />
        <SKILL />
        <ContactMe />
        <hr />
        <FOOTER />
      </>
    );
  }
}
export default LANDINGPAGE;
