import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UpdateProfile from "../components/UpdateProfile";
import "./styles.css"
import 'firebase/storage';

export default function f() {
    return (
        <div className="Searchpage">
            <Header></Header>
            <UpdateProfile></UpdateProfile>
            <Footer></Footer>
        </div>
    );
}