import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import headStyles from "../styles/head.module.css";
import logo3 from "../assets/trashlogo.png";

const Header = props => {
  return (
    <div className={headStyles.headerContainer}>
      <div
        style={{
          borderColor: "red",
          borderWidth: "75px",
          borderRadius: "55px",
          width: "17%",
          backgroundColor: "#47608d",
          textAlign: "center"
        }}
      >
        <img src={logo3} width="70%" />
      </div>
      <h2>{props.title || "header"}</h2>
      <div>
        
      </div>
      <ul>
      
      </ul>
    </div>
  );
};

export default Header;
