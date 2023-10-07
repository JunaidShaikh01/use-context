import React, { useState } from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

export default function Header() {
  const [activeComponents, setActiveComponents] = useState("");
  function handleNavigation(componentsName) {
    setActiveComponents(componentsName);
  }

  function rendarNavigation() {
    if (activeComponents === "Home") {
      return <Home />;
    }
    if (activeComponents === "Contact") {
      return <Contact />;
    }
    if (activeComponents === "About") {
      return <About />;
    }
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={() => handleNavigation("Home")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => handleNavigation("Contact")}
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => handleNavigation("About")}
                >
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <main>{rendarNavigation()}</main>
    </div>
  );
}
