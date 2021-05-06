import React from "react";
import "./styles.css";

export default function Body() {
  return (
    <div className="Body">
      <div className="discription-top">
        <h1>Faculty Staff Directory</h1>
        <h4 className="top-desc">
          These developed Maven website offers the opportunity to list
          professional achievements and supply contact information and office
          hours of faculties of multi universities.
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
          Faculty Staff Directory empowers user to easily view college faculty
          details. Student can easily view different college faculty details
          anywhere required at any time as this application is handy. User can
          search faculty details and view their respective details such as
          name,department , courses, area of expertise, and professional
          interest.This system reduces time and cost of user.Here, User doesn’t
          require any registration or login to access this system.
        </p>
      </div>
    </div>
  );
}
