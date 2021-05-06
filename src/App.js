import React from "react";
import './App.css';
import Homepage from "./frontend/pages/Homepage";
import ContactUs from "./frontend/pages/ContactUs";
import AboutUs from "./frontend/pages/AboutUs";
import Websitepage from "./frontend/pages/Websitepage";
import Login from "./frontend/pages/Login";
import CreateAccount from "./frontend/pages/CreateAccount";
import Searchpage from "./frontend/pages/Searchpage";
import AboutProf from "./frontend/pages/AboutProf";
import UpdateProfile from "./frontend/pages/UpdateProfile";
import { BrowserRouter, Route } from "react-router-dom";
import { AuthProvider } from "./frontend/contexts/AuthContext"
import ForgotPassword from "./frontend/pages/ForgotPassword.js";
import PrivateRoute, { AdminRoute } from "./frontend/components/PrivateRoute.js";
import SearchpageSimple from "./frontend/pages/SearchpageSimple";
import admin from "./frontend/pages/admin";
import ShowProfile from "./frontend/pages/ShowProfile"
import addExp from "./frontend/pages/addExp"


export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <Route path="/" exact component={Homepage} />
          <Route path="/web" exact component={Websitepage} />
          <Route path="/ContactUs" exact component={ContactUs} />
          <Route path="/AboutUs" exact component={AboutUs} />
          <Route path="/Login" exact component={Login} />
          <Route path="/CreateAccount" exact component={CreateAccount} />
          <Route path="/Searchpage/" exact component={SearchpageSimple} />
          <Route path="/Searchpage/:searchName" exact component={Searchpage} />
          <Route path="/AboutProf/:searchName" exact component={AboutProf} />
          <Route path="/forgot-password" exact component={ForgotPassword} />
          <AdminRoute path="/admin" exact component={admin} />
          <PrivateRoute path="/update-profile" exact component={UpdateProfile} />
          <PrivateRoute path="/show-profile" exact component={ShowProfile} />
          <PrivateRoute path="/add-exp" exact component={addExp} />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}
