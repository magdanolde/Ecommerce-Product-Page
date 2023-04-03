import React from "react";
import Logo from "../../images/logo.svg";
import Avatar from "../../images/image-avatar.png";
import Nav from "../Navbar/Nav";
import Basket from "./Basket";
import "../../scss/styles.scss";

function Header() {
  return (
    <section className="header">
      <Nav />
      <img src={Logo} alt="logo" className="header__logo" />
      <Basket />
      <img src={Avatar} alt="avatar" className="header__avatar" />
    </section>
  );
}

export default Header;
