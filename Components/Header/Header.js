import React from "react";
import Logo from "../../images/logo.svg";

import Nav from "../Navbar/Nav";
import Avatar from "./Avatar";
import Basket from "./Basket";
import "../../scss/styles.scss";

function Header() {
  return (
    <section className="header">
      <Nav />
      <img src={Logo} alt="logo" className="header__logo" />
      <Basket />
      <Avatar />
    </section>
  );
}

export default Header;

