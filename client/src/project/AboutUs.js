import React from "react";
import pic from "../assets/thumbnail2.jpeg";
import Header from "./Header";
import Footer from "./Footer";

const About = () => (
  <div>
    <Header title="TRASH IT" />
    <img src={pic} alt="pic" />
    <p>CEO Engineer Jacy Ng</p>
    <p>Impacting lives since 1986</p>
    <h5>TrashIt Nigeria Ltd is incoporated with the Nigerian CAC in 2019</h5>
    Our head office is located in Aba, abia state at no 202 coke avenue.
    <h3>Our Vision</h3>
    <p style={{ color: "red" }}>
      To make every home, street, province and state in Nigeria a state of the
      art abode
    </p>
    <h3>Our Mission</h3>
    <p>
      Bringing in good practices to foster development while stream lining and
      easing up garbage recyling, control and disposal at your own convenience{" "}
    </p>
    <Footer />
  </div>
);

export default About;
