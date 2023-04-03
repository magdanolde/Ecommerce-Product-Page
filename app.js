import React from "react";
import ReactDOM from "react-dom";
import Project from "./Project";

function App() {
  return (
    <>
      <Project />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
