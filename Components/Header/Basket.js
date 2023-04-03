import React, { useContext } from "react";
import { Context } from "../contexts/TasksContext";
import Cart from "../../images/icon-cart.svg";
import Thumbnail from "../../images/image-product-1-thumbnail.jpg";
import Delete from "../../images/icon-delete.svg";

const Basket = () => {
  const { Total } = useContext(Context);

  function calculateTotal(a, b) {
    return a * b;
  }
  return (
    <>
      <div className="header__cart">
        <img src={Cart} alt="cart" className="header__cart--icon" />
        <div
          className={
            Total > 0 ? "header__cart--items active" : "header__cart--items"
          }
        >
          {Total}
        </div>
      </div>
      <dialog className="header__modal">
        <div className="modal__name">
          <p className="modal__name--text">Cart</p>
        </div>
        <div className="modal__details">
          <img
            src={Thumbnail}
            className="modal__foto"
            alt="thumbnail product cart"
          />
          <p>Fall Limited Edition Sneakers</p>
          <div className="modal__price">
            <p>$125.00 x</p>
            <p>{Total}</p>
            <p>${calculateTotal(125, Total)}</p>
          </div>
          <img
            src={Delete}
            className="modal__delete"
            alt="bin icon remove product"
          />
          <button className="modal__button">Checkout</button>
        </div>
      </dialog>
    </>
  );
};

export default Basket;
