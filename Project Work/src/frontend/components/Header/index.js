import {} from "module";
import React from "react";
import "./styles.css";
import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar id="back" collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="/" className="header-logo">
        <img
          src="https://i.ibb.co/zZ7TNQX/Maven.png"
          alt="logo-pic"
          className="header-logo-img"
        />
      </Navbar.Brand>
      <Navbar.Brand id="home" href="/">
        MAVEN
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link eventKey={2} href="/" className="feature-list">
            Home
          </Nav.Link>
          <Nav.Link eventKey={2} href="/web" className="feature-list">
            Search
          </Nav.Link>
          <Nav.Link eventKey={2} href="/AboutUs" className="feature-list">
            About Us
          </Nav.Link>
          <Nav.Link eventKey={2} href="/ContactUs" className="feature-list">
            Contact Us
          </Nav.Link>

          <Nav.Link className="login-button" href="/Login">
            Faculty-Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
