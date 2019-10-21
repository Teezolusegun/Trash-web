import React from "react";
import office from "../assets/office.jpg";
import Header from "./Header";
import Footer from "./Footer"
import { Spring } from "react-spring/renderprops";

const ContactUs = () => (
  <div>
   <Header />
    <img src={office} alt="pic" />
    <p>Our office</p>
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 2 }}
      config={{ delay: 2000, duration: 4000 }}
    >
      {props => (
        <div style={props}>
          <div
            style={{
              background: "steelblue",
              color: "white",
              padding: "1.5rem"
            }}
          >
            <h1>HOME</h1>
            <h5>TrashIt Nigeria Ltd is located at the heart of aba </h5>
            Our head office is located in Aba, abia state at no 202 coke avenue.
            <p>Email: Trashit@yahoo.co.za</p>
            <p>Telephone:+234 9044756990,990889900</p>
          </div>
        </div>
      )}
    </Spring>
    )}
 <Footer/>
  </div>
);

export default ContactUs;
