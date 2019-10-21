import React, { Component } from "react";
import headStyles from "../styles/footer.module.css";

class Footer extends Component {
  render() {
    return (
      <div className={headStyles.footerContainer}>
        <div className={headStyles.footerContainer2}>
          <h1>TrashIt: Your No. 1 garbage Destination</h1>
          <p>
            TrashIt is your number one online garbage site in Nigeria. We are an
            online garbage site where we create avenue for you to dispose your
            solid waste as well as get value for some of your condemned and
            faily used items at your own convenience. What more?You can book
            appointment with us, set up your own disposal pick up time with us
            or cancel already booked appointments with full REFUND so long as it
            is cancelled 48hrs before the appointed time. we are committed to
            make our environment greener, more welcoming and making your home
            free of garbages and unwanted items that clusters our space. You can
            also make stress free payments online. what garbage do you want to
            get rid of. We are just clicks away
          </p>
        </div>
        <h5>
          Subscribe to our communications to receive special offers and latest
          news
        </h5>
      </div>
    );
  }
}
export default Footer;
