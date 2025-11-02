import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav id="main-nav">
      <button
        id="menu-toggle"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen ? "true" : "false"}
        onClick={toggleMenu}
      >
        ☰
      </button>

      <ul className={menuOpen ? "show" : ""}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleNavClick}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/closet"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleNavClick}
          >
            My Closet
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/create-outfit"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleNavClick}
          >
            Create Outfit
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/lookbook"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleNavClick}
          >
            Lookbook
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/upload-item"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleNavClick}
          >
            Upload Item
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleNavClick}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
