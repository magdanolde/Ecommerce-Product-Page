import React, { useContext, useState } from "react";
import { Context } from "../contexts/TasksContext";
import Cart from "../../images/icon-cart.svg";
import Thumbnail from "../../images/image-product-1-thumbnail.jpg";
import Delete from "../../images/icon-delete.svg";

const Basket = () => {
  let { Total, deleteItems } = useContext(Context);
  const [purchase, togglePurchase] = useState(false);

  function calculateTotal(a, b) {
    return a * b;
  }

  return (
    <>
      <div className="header__cart">
        <img
          src={Cart}
          alt="cart"
          className="header__cart--icon"
          onClick={() => togglePurchase(!purchase)}
        />
        <div
          className={
            Total > 0 ? "header__cart--items active" : "header__cart--items"
          }
        >
          {Total}
        </div>
      </div>
      <dialog
        className={
          purchase && Total > 0 ? "header__modal active" : "header__modal"
        }
      >
        <div className="modal__name">
          <p className="modal__name--text">Cart</p>
        </div>
        <div className="modal__details">
          <img
            src={Thumbnail}
            className="modal__foto"
            alt="thumbnail product cart"
          />
          <p className="modal__title">Fall Limited Edition Sneakers</p>
          <div className="modal__price">
            <p>$125.00 x</p>
            <p className="modal__price--total">{Total}</p>
            <p className="modal__price--bold">
              {calculateTotal(125, Total).toLocaleString("en-US", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
          <img
            src={Delete}
            onClick={deleteItems}
            className="modal__delete"
            alt="bin icon remove product"
          />
        </div>
        <button className="modal__button">Checkout</button>
      </dialog>
      <dialog
        className={
          purchase && Total <= 0 ? "header__modal active" : "header__modal"
        }
      >
        <div className="modal__name">
          <p className="modal__name--text">Cart</p>
        </div>
        <div className="modal__final">
          <p className="modal__final--text">Your cart is empty.</p>
        </div>
      </dialog>
    </>
  );
};

export default Basket;
