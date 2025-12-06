import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../css/navigation.css";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav id="main-nav">
      <button
        id="menu-toggle"
        aria-expanded={open}
        aria-controls="nav-list"
        onClick={() => setOpen(!open)}
      >
        &#9776;
      </button>

      <ul id="nav-list" className={open ? "open" : ""} onClick={close}>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/closet">My Closet</NavLink></li>
        <li><NavLink to="/create-outfit">Create Outfit</NavLink></li>
        <li><NavLink to="/lookbook">Lookbook</NavLink></li>
        <li><NavLink to="/upload-item">Upload Item</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}
