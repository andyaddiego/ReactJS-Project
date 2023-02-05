import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../Assets/highlightlogo.png"
import "../NavBar/NavBar.css";


export default function NavBar(){

  return (
    <nav className="menu_navbar_container">
        <Link to={"/"}>
          <img className="menu_img" src={logo} alt="Logo"/>
          </Link>
      <ul className="menu_items">
          <li>
            <Link to="/category/EyeshadowPalette" className="menu_list">
              Eyeshadow Palettes
            </Link>
          </li>
          <li>
            <Link to="/category/CheekPalette" className="menu_list">
              Cheek Palettes
            </Link>
          </li>
          <li>
            <Link to="/category/FacePalette" className="menu_list">
              Face Palettes
            </Link>
          </li>
      </ul>
      <CartWidget />
    </nav>
  );
}
