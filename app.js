import React from "react";
import Project from "./Project";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <>
      <Project />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
