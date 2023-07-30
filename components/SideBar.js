import React, { useState } from "react";
import Styles from "../styles/SideBar.module.css";
import Link from "next/link";

const SideBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`${Styles.container} ${isMenuOpen ? Styles.menuOpen : ""}`}>
      <div className={Styles.hamburger} onClick={toggleMenu}>
        <div className={Styles.line}></div>
        <div className={Styles.line}></div>
        <div className={Styles.line}></div>
      </div>
      <div className={`${Styles.sidebar} ${isMenuOpen ? Styles.menuOpen : ""}`}>
        <h1> Photo-gram </h1>
        <button className={Styles.closeButton} onClick={closeMenu}>
          {" "}
          ❌
        </button>
        <ul>
          <Link href="/" className={Styles.link_element}>
            <li>
              <i class="fa-solid fa-house"></i> <span>Home</span>
            </li>
          </Link>
          <li>
            <i class="fa-solid fa-magnifying-glass"></i> <span>Search</span>
          </li>
          <li>
            <i class="fa-solid fa-magic-wand-sparkles"></i>
            <span>Explore</span>
          </li>
          <li>
            <i class="fa-solid fa-slack"></i>
            <span>Reels</span>
          </li>
          <li>
            <i class="fa-solid fa-bell"></i>
            <span>Notifications</span>
          </li>
          <li>
            <i class="fa-solid fa-message"></i>
            <span>Messages</span>
          </li>
          <li>
            <i class="fa-solid fa-plus"></i>
            <span>Create</span>
          </li>
          <li>
            <i class="fa-solid fa-user"></i>
            <span>Profile</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
