import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import headStyles from "../styles/error.module.css";

const NotFound = () => (
  <div>
    <div className={headStyles.errorContainer}>
      <Header />
      <br />
      <br />
      <br />
      <h2>ARE You LOST??</h2>
      <h1>This is the 404 page.Kindly please check your URL</h1>
    </div>
  </div>
);

export default NotFound;
