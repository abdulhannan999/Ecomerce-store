import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import "./App.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light"
    style={{alignItems:"center"}}>
      <Link className="navbar-brand" to="/home"
      id="logo"
      style={{fontWeight:"500" , color:"blue" , marginLeft:"20px"}}
      >
        MEGA STORE
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav"
        id="navul"
        style={{marginLeft:"190px" , alignItems:"center"}}>
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shoes">
              Shoes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shirts">
              Shirts
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/nike">
              Nike Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/puma">
              Puma Products
            </Link>
          </li>
          <li className="nav-item pl-auto "
          id="cart"
          >
            <Link className="nav-link" to="/Cart">
            {/* <i class="bi bi-cart-check"></i> My Cart */}
            <i className="bi bi-cart-check" style={{ color: 'black', fontSize: '36px' }}></i>
            My Cart
                        </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
