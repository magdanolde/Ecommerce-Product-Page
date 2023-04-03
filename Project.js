import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Slider from "./Components/Slider";
import Main from "./Components/Main";
import Price from "./Components/Price/Price";
import { Context } from "./Components/contexts/TasksContext";

function Project() {
  const slides = [
    { url: "./images/image-product-1.jpg", title: "sneaker1" },
    { url: "./images/image-product-2.jpg", title: "sneaker2" },
    { url: "./images/image-product-3.jpg", title: "sneaker3" },
    { url: "./images/image-product-4.jpg", title: "city" },
  ];

  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([count]);

  function add(accumulator, a) {
    return accumulator + a;
  }
  const addToCart = () => {
    setCart([...cart, count]);
  };

  const Total = cart.reduce(add, 0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <Context.Provider
        value={{
          count,
          cart,
          Total,
          addToCart,
          incrementCount,
          decrementCount,
        }}
      >
        <Header />
        <Slider slides={slides} />
        <Main />
        <Price />
      </Context.Provider>
    </>
  );
}

export default Project;
