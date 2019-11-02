import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Services from "../components/Services/Services";
import HEADER from "../components/Header/Header";
import FOOTER from "../components/Footer/Footer.js";
import TEAM from "../components/Team/Team";
import Fans from "../components/OurFans/OurFans";
import Contact from "../components/ContactUs/ContactUs";
import NAVBAR from "../components/NavBar/NavBar";
import ABOUTUS from "../components/About Us/AboutUs";
import PORTFOLIO from "../components/Portfolio/Portfolio";
import SOCIAL from "../components/SocialMedia/SocialMedia";
import MODAL from "../components/Modal/Modal";

class LANDINGPAGE extends Component {
  render() {
    return (
      <>
        <NAVBAR />
        <HEADER />
        <hr />
        <Services />
        <hr />
        <MODAL />
        <hr />
        <PORTFOLIO />
        <hr />
        <ABOUTUS />
        <hr />
        <TEAM />
        <hr />
        <Fans />
        <hr />
        <Contact />
        <hr />
        <SOCIAL />
        <FOOTER />
      </>
    );
  }
}
export default LANDINGPAGE;
