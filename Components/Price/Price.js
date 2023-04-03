import React, { useContext } from "react";
import Minus from "../../images/icon-minus.svg";
import Plus from "../../images/icon-plus.svg";
import { Context } from "../contexts/TasksContext";

const Price = () => {
  const { count, incrementCount, decrementCount, addToCart } =
    useContext(Context);

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
        <button className="items__minus" onClick={decrementCount}>
          <img src={Minus} alt="decrease items minus" />
        </button>
        <p className="items__number">{count}</p>
        <button className="items__plus" onClick={incrementCount}>
          <img src={Plus} alt="increase items plus" />
        </button>
      </div>
      <button className="price__button" onClick={addToCart}>
        <svg
          className="price__cart"
          width="22"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="white"
            fillRule="nonzero"
          />
        </svg>
        Add to cart
      </button>
    </section>
  );
};

export default Price;
