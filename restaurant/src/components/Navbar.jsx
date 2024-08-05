import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { cart } from "../Data";

const Navbar = ({ onSearch }) => {
  const navbarRef = useRef();
  const searchRef = useRef();
  const cartRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();  // Using useNavigate for navigation

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  const handleSearch = () => {
    onSearch(searchQuery);
    navigate("/menu"); // Redirect to the menu page after searching
  };

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo" />
        </Link>
        <nav className="navbar" ref={navbarRef}>
          <Link to="/home">home</Link>
          <Link to="/about">about</Link>
          <Link to="/menu">menu</Link>
          <Link to="/review">review</Link>
          <Link to="/contact">contact</Link>
          <Link to="/blogs">blogs</Link>
        </nav>
        <div className="icons">
          <div
            className="fas fa-search"
            id="search-btn"
            onClick={searchHandler}
          ></div>
          <div
            className="fas fa-shopping-cart"
            id="cart-btn"
            onClick={cartHandler}
          ></div>
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ></div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input
            type="search"
            id="search-box"
            placeholder="search here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <label htmlFor="search-box" className="fas fa-search" onClick={handleSearch}></label>
        </div>
        <div className="cart-items-container" ref={cartRef}>
          {cart.map((item, index) => (
            <div className="cart-item" key={item.id}>
              <span className="fas fa-times"></span>
              <img src={item.img} alt={item.name} />
              <div className="content">
                <h3>{item.name}</h3>
                <div className="price">{item.price}</div>
              </div>
            </div>
          ))}
          <a href="#" className="btn">
            checkout now
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
