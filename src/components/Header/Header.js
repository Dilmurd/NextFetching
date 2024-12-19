import React from "react";
import "./Header.scss";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


const header = ["Home", "Brands", "Recent Products", "Contact", "About"];


function Header() {
    const navbar =  header?.map((item,inx) => (
        <li className="navbar__item" key={inx}>
          <span>{item}</span>
        </li>
      ))
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="navbar__logo">
            <h1>Products</h1>
          </div>
        <ul className="navbar__collection">{navbar}</ul>
        <div className="navbar__icons">
            <FaSearch/>
            <FaRegUser/>
            <FaShoppingCart/>
        </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
