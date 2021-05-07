import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Searchpage from "../components/Searchpage";
import "./styles.css"

export default function Homepage(props) {
    return (
        <div className="Searchpage">
            <Header></Header>
            <Searchpage searchName=""></Searchpage>
            <Footer></Footer>
        </div>
    );
}
