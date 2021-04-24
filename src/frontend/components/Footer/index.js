import React, { useState } from "react";
import "./styles.css";
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from "react-router-dom"

export default function Footer() {

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
      return <a onClick={handleLogOut} href="/">
        Logout
            </a>
    else
      return <a href="/Login">
        Faculty-Login
            </a>
  }


  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          <span className="header-logo">
            <img src="https://i.ibb.co/zZ7TNQX/Maven.png" alt="pic" />
          </span>
        </h3>

        <p className="footer-links">
          <a href="/" className="link-1">
            Home
          </a>

          <a href="/AboutUs">About</a>

          {loginUI()}

          <a href="/ContactUs">Contact</a>
        </p>

        <p className="footer-company-name">Maven Corp © 2021</p>
      </div>

      <div className="footer-center">
        <div>
          <p>
            <span>444 S. Cedros Ave</span> Solana Beach, California
          </p>
        </div>

        <div>
          <br />
          <p>+1.555.555.5555</p>
        </div>

        <div>
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div className="footer-icons">
          <a href="#facebook" className="footer-logo">
            <img src="https://i.ibb.co/ZxC8NCp/Facebook.png" alt="pic" />
          </a>
          <a href="#instagram" className="footer-logo">
            <img src="https://i.ibb.co/4VXznmP/Instagram.png" alt="pic" />
          </a>
          <a href="#linkedin" className="footer-logo">
            <img src="https://i.ibb.co/tzsnHYJ/LinkedIn.png" alt="pic" />
          </a>
          <a href="#twitter" className="footer-logo">
            <img src="https://i.ibb.co/nb69Q63/Twitter.png" alt="pic" />
          </a>
        </div>
      </div>
    </footer>
  );
}
