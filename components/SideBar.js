import React from "react";
import Styles from "../styles/SideBar.module.css"
import Link from "next/link";

const SideBar = () => {
  return (
    <div className={Styles.sidebar}>
      <h1> Gram </h1>
      <ul>
        <Link href="/" className={Styles.link_element}>
        <li><i class="fa-solid fa-house fa-lg"></i> <span>Home</span></li>
        </Link>
        <li><i class="fa-solid fa-magnifying-glass fa-lg"></i>  <span>Search</span></li>
        <li><i class="fa-solid fa-magic-wand-sparkles fa-lg"></i><span>Explore</span></li>
        <li><i class="fa-solid fa-slack fa-lg"></i><span>Reels</span></li>
        <li><i class="fa-solid fa-bell fa-lg"></i><span>Notifications</span></li>
        <li><i class="fa-solid fa-message fa-lg"></i><span>Messages</span></li>
        <li><i class="fa-solid fa-plus fa-lg"></i><span>Create</span></li>
        <li><i class="fa-solid fa-user fa-lg"></i><span>Profile</span></li>
      </ul>
    </div>
  );
};

export default SideBar;
