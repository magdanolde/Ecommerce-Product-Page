import React from "react";
import Close from "../../images/icon-close.svg";
import Menu from "../../images/icon-menu.svg";
import "../../scss/styles.scss";
import NavItems from "./NavItems";
import { useState } from "react";

function Nav() {
  const [hiddenMenu, setHiddenMenu] = useState(true);

  return (
    <div className="header__wrapper">
      <div className="header__button">
        <img
          className="header__icon-mobile--open"
          src={Menu}
          alt="mobile menu open"
          onClick={() => setHiddenMenu(!hiddenMenu)}
        />
      </div>
      <div
        className={
          hiddenMenu ? "header__nav--wrapper" : "header__nav--wrapper active"
        }
      >
        <ul className="header__nav">
          <img
            className={"header__icon-mobile-close"}
            src={Close}
            alt="mobile menu close"
            onClick={() => setHiddenMenu(!hiddenMenu)}
          />
          {NavItems.map((item, index) => {
            return (
              <li className={item.cNameLi} key={index}>
                <a className={item.cNameA} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={hiddenMenu ? "nav__background" : "nav__background active"}
      ></div>
    </div>
  );
}

export default Nav;
