import React from "react";

function Hey(props) {
  return (
    <>
      <nav className="navbar fixed-top py-3 navbar-expand-xl shadow-lg navbar-dark">
        <a className="navbar-brand ml-3" href="/">Mobile Shop</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Your Order</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Wish List</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Sign In</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Sign Up</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Sign Out</a>
            </li>
          </ul>
          <form className="form-inline ml-3 mr-4 my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btnn btn-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Hey;
