import Header from "../components/Header";
import React from "react";
import Footer from "../components/Footer";
import AboutProf from "../components/AboutProf";
import "./styles.css"


export default function Homepage(props) {
  return (
    <div className="AboutProf">
      <Header></Header>
      <AboutProf searchName={props.match.params.searchName}></AboutProf>
      <Footer></Footer>
    </div>
  );
}
