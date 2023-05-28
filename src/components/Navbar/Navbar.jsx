import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import ClearAllIcon from "@material-ui/icons/ClearAll";

//
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm  shadow-lg">
      <div className="container">
        <Link className="navbar-brand text-primary fst-italic" to="/">
          TodosBlog
        </Link>
        <button
          className="navbar-toggler navbar-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <ClearAllIcon style={{ fontSize: "44px", color: "gray" }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto  mb-lg-0">
            <li className="nav-item ">
              <Link
                className="nav-link active fst-italic fw-bold"
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
