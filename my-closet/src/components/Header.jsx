import React from "react";
import "../css/header.css";
import "../css/base.css";
import logo from "../images/logo.png";
import Navigation from "./Navigation.jsx";

export default function Header() {
  return (
    <header id="main-header">
      <img src={logo} alt="My Closet logo" />
      <div id="brand"><h1>MY CLOSET</h1></div>

      <Navigation />
    </header>
  );
}
