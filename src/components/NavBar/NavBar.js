/*
Nav bar using React-Bootstrap
    Contains: 
    - Left > Logo
    - Rigt > Links to:
        - Recyclage section
        - Support section
        - Team section
        - Social Media section
        - Contact section
*/

import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navLinks from "../../data/navData.js";
import logo from "../../assets/battery-full-solid.svg";

class NAVBAR extends Component {
  state = { links: navLinks, isTop: true };

  // darken navbar on scroll
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onScroll(isTop) {
    this.setState({ isTop });
  }

  render() {
    return (
      <Navbar
        sticky="top"
        // darken navbar on scroll
        bg={this.state.isTop ? "transparent" : "light"}
        expand="lg"
        variant="light"
      >
        <Container fluid>
          <Navbar.Brand href="#page-top">
            <img
              text="light"
              src={logo}
              width="150"
              height="60"
              className="d-inline-block"
              alt="recyclage-logo"
            />
            Full-Stock
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {navLinks.map(link => {
                return <NAVBARLNKS key={link.id} navlink={link} />;
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

class NAVBARLNKS extends Component {
  render() {
    const { name, link } = this.props.navlink;
    return <Nav.Link href={link}>{name}</Nav.Link>;
  }
}

export default NAVBAR;
