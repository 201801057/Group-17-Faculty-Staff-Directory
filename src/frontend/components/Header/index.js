import React, { useState } from "react";
import "./styles.css";
import { Navbar, Nav } from "react-bootstrap";
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from "react-router-dom"

export default function Header() {

  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogOut() {
    setError("")

    try {
      await logout()
      history.push("/")
    } catch {
      setError("Failed to log out")
      alert(error);
    }
  }

  function loginUI() {
    if (currentUser)
      return <Nav.Link className="login-button" onClick={handleLogOut} href="/">
        Logout
            </Nav.Link>
    else
      return <Nav.Link className="login-button" href="/Login">
        Faculty-Login
            </Nav.Link>
  }

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

          {loginUI()}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
