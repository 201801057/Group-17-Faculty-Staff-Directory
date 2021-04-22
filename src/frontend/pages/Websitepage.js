import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Bodyweb from "../components/Bodyweb";
import Search from "../components/Search";

import "./styles.css"

export default function Homepage() {
  return (
    <div className="websitepage">
      <Header></Header>
      <Search></Search>
      <Bodyweb></Bodyweb>
      <Footer></Footer>
    </div>
  );
}
