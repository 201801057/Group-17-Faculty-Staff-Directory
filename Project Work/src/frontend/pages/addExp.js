import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddExp from "../components/AddExp";
import "./styles.css"

export default function f() {
    return (
        <div className="Searchpage">
            <Header></Header>
            <AddExp></AddExp>
            <Footer></Footer>
        </div>
    );
}