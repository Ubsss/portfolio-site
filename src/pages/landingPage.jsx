import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import SERVICES from "../components/Services/Services";
import HEADER from "../components/Header/Header";
import FOOTER from "../components/Footer/Footer.js";
import ContactMe from "../components/ContactMe/ContactMe";
import NAVBAR from "../components/NavBar/NavBar";
import ABOUTME from "../components/AboutMe/AboutMe";
import PORTFOLIO from "../components/Portfolio/Portfolio";
import SOCIAL from "../components/SocialMedia/SocialMedia";
import RESUME from "../components/Resume/Resume";
import BLOG from "../components/Blog/Blog";

class LANDINGPAGE extends Component {
  render() {
    return (
      <>
        <NAVBAR />
        <HEADER />
        <hr />
        <RESUME />
        <hr />
        <SERVICES />
        <hr />
        <PORTFOLIO />
        <hr />
        <ABOUTME />
        <hr />
        <ContactMe />
        <hr />
        <SOCIAL />
        <hr />
        <BLOG />
        <FOOTER />
      </>
    );
  }
}
export default LANDINGPAGE;
