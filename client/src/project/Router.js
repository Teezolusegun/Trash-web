import React from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import NotFound from "./NotFound";
import ContactUs from "./ContactUs";
import Career from "./Career";
import Login from "./SignIn"
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/AboutUs" component={AboutUs} />
      <Route path="/ContactUs" component={ContactUs} />
      <Route path="/Career" component={Career} />
      <Route path="/Login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
