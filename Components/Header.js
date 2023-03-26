import React from "react";
import Logo from "../images/logo.svg";
import Cart from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
import Nav from "../Components/Nav";
import "../scss/styles.scss";

function Header() {
  return (
    <section className="header">
      <Nav />
      <img src={Logo} alt="logo" className="header__logo" />
      <img src={Cart} alt="cart" className="header__cart" />
      <img src={Avatar} alt="avatar" className="header__avatar" />
    </section>
  );
}

export default Header;
