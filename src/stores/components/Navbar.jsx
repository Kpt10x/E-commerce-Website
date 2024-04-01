import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

const Navbar = () => {

  const {cartItems }= useCart()

  return (
    <div className="navbar-section">

      <div className="navSection">
        {/* Logo or website title */}
        <Link to='/' className="custom-link">
          <div className="title">
            <h2>E-Commerce</h2>
          </div>
        </Link>

        {/* Search bar */}
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>

        {/* User authentication links */}
        <div className="user">
          <Link to="/SigninSignupPage"  className="user-detail">Sign In / Sign Up</Link>
        
        </div>

        {/* Cart link */}
        <Link to= '/cart'>
          <div className="cart">Cart
            <span>
              {cartItems.length} {/* Display number of items in the cart */}
            </span>
          </div>
        </Link>
      </div>

      {/* Navigation menu */}
      <div className="subMenu">
        <ul>
          {/* Links to different sections/categories */}
          <Link to="/mobiles" className="custom-link">
            <li>Mobiles</li>
          </Link>

          <Link to="/computers" className="custom-link">
            <li>Computers</li>
          </Link>

          <Link to="/watch" className="custom-link">
            <li>Watches</li>
          </Link>

          <Link to="/men" className="custom-link">
            <li>Mens Wear</li>
          </Link>

          <Link to="/woman" className="custom-link">
            <li>Woman Wear</li>
          </Link>

          <Link to="/furniture" className="custom-link">
            <li>Furniture</li>
          </Link>

          <Link to="/kitchen" className="custom-link">
            <li>Kitchen</li>
          </Link>

          <Link to="/fridge" className="custom-link">
            <li>Fridge</li>
          </Link>

          {/* Other potential links */}
          {/* 
          <Link to="/" className="custom-link">
            <li>Books</li>
          </Link> */}

          {/* 
          <Link to="/" className="custom-link">
            <li>Speakers</li>
          </Link> */}

          {/* 
          <Link to="/" className="custom-link">
            <li>TV's</li>
          </Link> */}

          {/* 
          <Link to="/ac" className="custom-link">
            <li>AC</li>
          </Link> */}
        </ul>
      </div>
    </div >
  );
};

export default Navbar;
