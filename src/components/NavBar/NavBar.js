import React, { Component } from "react";
import { Navbar, Nav, Container, Row, Col, Image } from "react-bootstrap";
import navLinks from "./navData.js";
import "./NavBar.css";
import ToTopArrow from "./toTopArrow.svg";

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
      <Navbar expand="lg" variant="light" className="text-white ">
        <Container id="top" fluid>
          <Navbar.Brand href="#page-top"></Navbar.Brand>
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
        <Row>
          <Col>
            {/* button to go to top of screen */}
            {this.state.isTop ? null : (
              <a href="#top">
                <Image
                  src={ToTopArrow}
                  rounded
                  alt="Scroll to top"
                  className="jumpToTopButton "
                  style={{ width: 50, height: 50 }}
                />
              </a>
            )}
          </Col>
        </Row>
      </Navbar>
    );
  }
}

// implement smooth scrolling to section and at the right height
class NAVBARLNKS extends Component {
  render() {
    const { name, link } = this.props.navlink;
    return (
      <Nav.Link className="activeSectionNav" href={link}>
        {name}
      </Nav.Link>
    );
  }
}

export default NAVBAR;
