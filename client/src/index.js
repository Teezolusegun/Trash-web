import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "../src/project/SignIn";
import SignUp from "../src/project/SignUp";
import Router2 from "./Router/Router2";
import Home from "../src/project/Home";
import LoginHome from "../src/loginHome/Home2";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<Router2 />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
