import React from "react";
import "./styles.css";

export default function Login() {
  return (
    <div className="log-in">
      <div className="log-img">
        <img
          src="https://i.ibb.co/BsC4TsP/Boy.png"
          alt="logo-pic"
          className="header-logo-img"
        />
      </div>
      <div className="log-log-in">
        <div>
          <h2>Login</h2>

          <form action="/action_page.php" method="post">
            <div className="">
              <label for="email">
                <b>Username</b>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                required
              />

              <label for="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                id="confirm_password"
                required
              />

              <button type="" className="Create-Account1">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
