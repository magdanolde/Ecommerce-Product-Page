import React from "react";
import Minus from "../images/icon-minus.svg";
import Plus from "../images/icon-plus.svg";
import Cart from "../images/icon-cart.svg";

const Price = () => {
  return (
    <section className="price">
      <div className="price__info">
        <p className="price__old">$125.00</p>
        <div className="price__discount">
          <p className="discount__number">50%</p>
        </div>
        <p className="price__new">$250.00</p>
      </div>
      <div className="price__items">
        <button className="items__minus">
          <img src={Minus} alt="decrease items minus" />
        </button>
        <p className="items__number">0</p>
        <button className="items__plus">
          <img src={Plus} alt="increase items plus" />
        </button>
      </div>
      <button className="price__button">
        <img src={Cart} alt="cart icon" />
        Add to cart
      </button>
    </section>
  );
};

export default Price;
