import React from "react";
import "./styles.css";

export default function Body() {
  return (
    <div className="Body">
      <div className="discription-top">
        <h1>Faculty & Staff directory</h1>
        <h4 className="top-desc">
          These developed pages offer the opportunity to list professional
          achievements and supply contact information and office hours of
          faculties of multiple universities.
        </h4>
      </div>
      <div className="goto-web">
        <a href="/web">
          <button className="goto-button">Go to the Website</button>
        </a>
      </div>
      <div className="body-photo">
        <img src="https://i.ibb.co/BsC4TsP/Boy.png" alt="pic"></img>
      </div>
      <div className="discription-bottom">
        <p>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.Lorem ipsum
          dolor sit amet, consectateur adispicing elit. Fusce euismod convallis
          velit, eu auctor lacus vehicula sit amet.Lorem ipsum dolor sit amet,
          consectateur adispicing elit. Fusce euismod convallis velit, eu auctor
          lacus vehicula sit amet.Lorem ipsum dolor sit amet, consectateur
          adispicing elit. Fusce euismod convallis velit, eu auctor lacus
          vehicula sit amet.
        </p>
      </div>
    </div>
  );
}
