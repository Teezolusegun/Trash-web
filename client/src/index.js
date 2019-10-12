import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "../src/project/Router";
import App from "./App";
import Login from "../src/project/SignIn";
import SignUp from "../src/project/SignUp";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<SignUp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
