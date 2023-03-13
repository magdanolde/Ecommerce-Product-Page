import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";


function App() {
    return (
      <>
        <div>hello</div>
      </>
    );
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.createRoot(rootElement).render(<App />);