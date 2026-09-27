import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

import styles from "./Navbar.module.css";

import navigation from "../../data/navigation";
import siteConfig from "../../config/siteConfig";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className="container">

        <nav className={styles.navbar}>

          <NavLink
            to="/"
            className={styles.logo}
            onClick={closeMenu}
          >
            {siteConfig.logo}
          </NavLink>

          <ul
            className={`${styles.navLinks} ${
              menuOpen ? styles.active : ""
            }`}
          >
            {navigation.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : ""
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;