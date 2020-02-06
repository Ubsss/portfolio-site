import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import HEADER from "../components/Header/Header";
import FOOTER from "../components/Footer/Footer.js";
import CONTACTME from "../components/ContactMe/ContactMe";
import NAVBAR from "../components/NavBar/NavBar";
import ABOUTME from "../components/AboutMe/AboutMe";
import SKILL from "../components/Skills/Skills";
import EXPERIENCE from "../components/Experience/Experience";
import PROJECTS from "../components/Projects/Projects";

class LANDINGPAGE extends Component {
  render() {
    return (
      <>
        <NAVBAR />
        <HEADER />
        <ABOUTME />
        <SKILL />
        <EXPERIENCE />
        <PROJECTS />
        <CONTACTME />
        <hr />
        <FOOTER />
      </>
    );
  }
}
export default LANDINGPAGE;
