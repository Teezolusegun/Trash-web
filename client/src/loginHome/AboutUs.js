import React from "react";
import pic from "../assets/thumbnail2.jpeg";
import Header from "../project/Header";
import Footer from "../project/Footer";

const About = () => (
  <div style={{ padding: "40px" }}>
    <img src={pic} alt="pic" width="300" height="300" />
    <h3 style={{ color: "red" }}>CEO Engineer Jacy Ng</h3>
    <p>Impacting lives since 1986</p>
    <br />
    <br />
    <h5>TrashIt Nigeria Ltd is incoporated with the Nigerian CAC in 2019</h5>
    Our head office is located in Aba, abia state at no 202 coke avenue.
    <h2 style={{ color: "yellow" }}>Our Vision</h2>
    <p>
      To make every home, street, province and state in Nigeria a state of the
      art abode
    </p>
    <br />
    <br />
    <h2 style={{ color: "yellow" }}>Our Mission</h2>
    <p>
      Bringing in good practices to foster development while stream lining and
      easing up garbage recyling, control and disposal at your own convenience{" "}
    </p>
  </div>
);

export default About;
