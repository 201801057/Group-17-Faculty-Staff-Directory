import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShowProfile from "../components/ShowProfile";
import "./styles.css"

export default function f() {
    return (
        <div className="Searchpage">
            <Header></Header>
            <ShowProfile></ShowProfile>
            <Footer></Footer>
        </div>
    );
}