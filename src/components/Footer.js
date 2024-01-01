import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-content">
        <img
          src="https://little-lemon-jp.netlify.app/static/media/footer-logo.4470f9c9e815da98dbb3.png"
          alt="logo"
        />
        <div className="element-footer">
          <section className="nav">
            <h1 className="header-footer">Navigation</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservation</li>
              <li>Order</li>
              <li>Login</li>
            </ul>
          </section>
          <section className="Contect">
            <h1 className="header-footer">Contact</h1>
            <p>2395 Maldove Way, Chicago Illinois</p>
            <p>(629)-243-6827</p>
            <p>info@littelemon.com</p>
          </section>
          <section className="Connect">
            <h1 className="header-footer">Connect</h1>
            <h2>Facebook</h2>
            <h2>Instagram</h2>
            <h2>Join us!</h2>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Footer;
