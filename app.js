import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Main from "./Components/Main";
import Price from "./Components/Price";

function App() {
  const slides = [
    { url: "./images/image-product-1.jpg", title: "sneaker1" },
    { url: "./images/image-product-2.jpg", title: "sneaker2" },
    { url: "./images/image-product-3.jpg", title: "sneaker3" },
    { url: "./images/image-product-4.jpg", title: "city" },
  ];

  return (
    <>
      <Header />
      <Slider slides={slides} />
      <Main />
      <Price />
    </>
  );
}
  
  const rootElement = document.getElementById("root");
  ReactDOM.createRoot(rootElement).render(<App />);