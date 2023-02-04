import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
//import { category } from "../../data/data";
//import { useEffect, useState } from "react";
import logo from "../../Assets/highlightlogo.png"
import "../NavBar/NavBar.css";

/*const NavBar = () => {
  const [categories, setCategories] = useState();
  const getCategories = new Promise((resolve, reject) => {
    resolve(category);
  });

  useEffect(() => {
    getCategories.then((response) => {
      setCategories(response);
    });
  }, []);

  return (
    <nav className="menu_navbar_container">
        <Link to={"/"}>
          <img className="menu_img" src={logo} alt="Logo"/>
          </Link>
      <ul className="menu_items">
        {categories && categories.map((category) => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`} className="menu_list">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;*/

export default function NavBar(){

  return (
    <nav className="menu_navbar_container">
        <Link to={"/"}>
          <img className="menu_img" src={logo} alt="Logo"/>
          </Link>
      <ul className="menu_items">
          <li>
            <Link to="/category/EyeshadowPalette" className="menu_list">
              Eyeshadow Palette
            </Link>
          </li>
          <li>
            <Link to="/category/CheekPalette" className="menu_list">
              Cheek Palette
            </Link>
          </li>
          <li>
            <Link to="/category/FacePalette" className="menu_list">
              Face Palette
            </Link>
          </li>
      </ul>
      <CartWidget />
    </nav>
  );
}

// hacer clickeables los items del nav bar
// y un notificación mostrando un número hardcodeado (fijo)

