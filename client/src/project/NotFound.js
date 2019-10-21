import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import headStyles from "../styles/error.module.css";

const NotFound = () => (
  <div  >
    
    <div className={headStyles.errorContainer}>

    <h1>This is the 404 page. Are you lost? Please check your URL</h1>

    </div>
  
  
  </div>
);

export default NotFound;
