import React from "react";
import logo from "./logo.jpg";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav>
        <img src={logo} alt="litte lemon" width={259} />
        <ul className="nav-links">
          <li>
            <Link to="/">
              <a href="#home">Home</a>
            </Link>
          </li>
          <li>
            <a href="#menu">About</a>
          </li>
          <li>
            <a href="#specials">Menu</a>
          </li>
          <li>
            <a href="#about">Reservations</a>
          </li>
          <li>
            <a href="#contact">Order Online</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
