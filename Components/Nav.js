import React from "react";
import Close from "../images/icon-close.svg";
import Menu from "../images/icon-menu.svg";
import "../scss/styles.scss";

function Nav() {
  return (
    <div className="header__wrapper">
      <div className="header__button">
        <img
          className="header__icon-mobile--open active"
          src={Menu}
          alt="mobile menu open"
        />
      </div>
      <div className="header__nav--wrapper">
        <img
          className="header__icon-mobile-close"
          src={Close}
          alt="mobile menu close"
        />
        <ul className="header__nav">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Collections
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Men
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Women
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="nav__background"></div>
    </div>
  );
}

export default Nav;
