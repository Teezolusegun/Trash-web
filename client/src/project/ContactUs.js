import React from "react";
import office from "../assets/office.jpg";
import Header from "./Header";
import Footer from "./Footer";

const ContactUs = () => (
  <div>
    <Header title="TRASH IT" />
    <img src={office} alt="pic" />
    <p>Our office</p>
    <h5>TrashIt Nigeria Ltd is located at the heart of aba </h5>
    Our head office is located in Aba, abia state at no 202 coke avenue.
    <p>Email: Trashit@yahoo.co.za</p>
    <p>Telephone:+234 9044756990,990889900</p>
    <Footer />
  </div>
);

export default ContactUs;
