import React from "react";
import pic from "../assets/thumbnail2.jpeg";
import Header from "../project/Header";
import Footer from "../project/Footer";

const About = () => (
  <div>
    <Header title="About Us" />
    <div style={{ padding: "40px" }}>
      <img src={pic} alt="pic" width="300" height="300" />
      <h3 style={{ color: "orange" }}>CEO Engineer Jacy Ng</h3>
      <h5>Impacting lives since 1986</h5>
      <br />
      <br />
      <h4>TrashIt Nigeria Ltd is incoporated with the Nigerian CAC in 2019</h4>
      Our head office is located in Aba, abia state at no 202 coke avenue.
      <br />
      <br />
      <h2 style={{ color: "brown" }}>Our Vision</h2>
      <h5>
        To make every home, street, province and state in Nigeria a state of the
        art abode
      </h5>
      <br />
      <br />
      <h2 style={{ color: "brown" }}>Our Mission</h2>
      <h5>
        Bringing in good practices to foster development while stream lining and
        easing up garbage recyling, control and disposal at your own convenience{" "}
      </h5>
    </div>
    <Footer />
  </div>
);

export default About;
