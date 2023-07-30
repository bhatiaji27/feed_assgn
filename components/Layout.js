import React from "react";
import Styles from "../styles/styles.module.css";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className={Styles.container}>
      <SideBar />
      <main className={Styles.main_content}>{children}</main>
    </div>
  );
};

export default Layout;
