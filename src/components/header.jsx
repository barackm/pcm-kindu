import React, { Component } from "react";
import {Link} from "react-router-dom"
class Header extends Component {
  state = {};
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <li className="navbar-brand" href="index.html">
            MCK {" "}<span>{" "}Kisangani</span>
          </li>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" href="index.html" className="nav-link">
                  Home
                </Link >
              </li>
              <li className="nav-item">
                <Link to="/about" href="about.html" className="nav-link">
                  A props
                </Link >
              </li>
              <li className="nav-item">
                <Link to="/services" href="services.html" className="nav-link">
                  Services
                </Link >
              </li>
              <li className="nav-item">
                <Link to="/" href="doctors.html" className="nav-link">
                  Docteurs
                </Link >
              </li>
              <li className="nav-item">
                <Link to="/" href="blog.html" className="nav-link">
                  Actualite
                </Link >
              </li>
              <li className="nav-item">
                <Link to="/" href="contact.html" className="nav-link">
                  Contact
                </Link >
              </li>
              <li className="nav-item cta">
                <Link to="/"
                  href="contact.html"
                  className="nav-link"
                  data-toggle="modal"
                  data-target="#modalRequest"
                >
                  <span>Faire une Suggestion</span>
                </Link >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
