import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navLinks from "../../data/navData.js";
// import logo from "../../assets/battery-full-solid.svg";
import logo1 from "../../assets/solid-stack.svg";
// import logo2 from "../../assets/transparent-stack.svg";

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
              src={logo1}
              width="100"
              height="60"
              className="d-inline-block"
              alt="full-stock-logo"
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

// implement smooth scrolling to section and at the right height
class NAVBARLNKS extends Component {
  render() {
    const { name, link } = this.props.navlink;
    return <Nav.Link href={link}>{name}</Nav.Link>;
  }
}

export default NAVBAR;
