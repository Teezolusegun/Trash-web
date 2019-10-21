import React from "react";
import Home from "../project/Home";
import LoginHome from "../loginHome/Home2"
import NotFound from "../project/NotFound";
import ContactUs from "../loginHome/ContactUs";
import Career from "../loginHome/Career";

import About from "../loginHome/AboutUs";
import SignUp from "../project/SignUp";
import SignIn from "../project/SignIn";
import { BrowserRouter, Route, Switch } from "react-router-dom";


const Router = () => (
  <BrowserRouter>
  
     
    <Switch>
      <Route exact path="/" component={Home} />
     
      <Route path="/User" component={LoginHome} />
      <Route path="/ContactUs" component={ContactUs} />
      <Route path="/Career" component={Career} />
     <Route path="/AboutUs" component={About} />
     <Route path="/signUp" component={SignUp} />
     <Route path="/signIn" component={SignIn}/>
      <Route component={NotFound} />
    </Switch>
  
  </BrowserRouter>
);

export default Router;
