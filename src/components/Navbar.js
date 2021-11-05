import React from "react";

function Hey(props) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-light"
        style={{ backgroundColor: "#eaa2fd" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Mobile Shopee
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
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Details
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Your Order
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Favorite
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  SignIn
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  SignUp
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Hey;
