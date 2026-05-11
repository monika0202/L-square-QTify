import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Search />
      <Button text="Give Feedback" />
    </div>
  );
};

export default Navbar;