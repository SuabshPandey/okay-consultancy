import React from "react";
import { NavLink } from "react-router-dom";
// import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar custom_navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid p-0">
              <NavLink className="navbar-brand" to="/">
                <div className="logo_div">
                  <img className="logo_img" src="images/oklogo.png" alt="Logo" />
                </div>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav nav_list_item  mb-2 mb-lg-0">
                  <li className="nav-item custom_nav_items">
                    <NavLink
                      // activeClassName="menu_active"
                      className="nav-link "
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item custom_nav_items">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link "
                      aria-current="page"
                      to="/about"
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item custom_nav_items">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/classes"
                    >
                      Courses
                    </NavLink>
                  </li>
                  <li className="nav-item custom_nav_items">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/services"
                    >
                      Our Services
                    </NavLink>
                  </li>
                  <li className="nav-item custom_nav_items">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/countries"
                    >
                      Destinations
                    </NavLink>
                  </li>

                  <li className="nav-item custom_nav_items">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/contact"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
