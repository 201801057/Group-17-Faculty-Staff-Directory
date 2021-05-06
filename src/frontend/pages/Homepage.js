import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

import "./styles.css"

export default function Homepage() {
  return (
    <div className="Homepage">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}
