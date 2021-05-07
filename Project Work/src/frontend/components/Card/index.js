import React from "react";
import "./styles.css";

export default function Card(props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={props.image} alt="Avatar"></img>
        </div>
        <div className="flip-card-back">
          <h1>{props.heading}</h1>
          <span>
            {props.detail} <a href={"/Searchpage/" + props.heading}>Search</a>
          </span>
        </div>
      </div>
    </div>
  );
}
