import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/header.css";      // nav + responsive styles
import "../css/base.css";        // variables, fonts, etc.
import logo from "../images/logo.png";

export default function Header() {
  const { pathname } = useLocation();
  const isActive = (to) => (pathname === to ? "active" : "");

  return (
    <header id="main-header">
      <img src={logo} alt="My Closet logo" />
      <div id="brand"><h1>MY CLOSET</h1></div>

      <nav id="main-nav">
        <ul>
          <li><Link className={isActive("/")} to="/">Home</Link></li>
          <li><Link className={isActive("/closet")} to="/closet">My Closet</Link></li>
          <li><Link className={isActive("/create-outfit")} to="/create-outfit">Create Outfit</Link></li>
          <li><Link className={isActive("/lookbook")} to="/lookbook">Lookbook</Link></li>
          <li><Link className={isActive("/upload-item")} to="/upload-item">Upload Item</Link></li>
          <li><Link className={isActive("/contact")} to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
