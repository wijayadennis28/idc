import Header from "./scripts/header";
import Footer from "./scripts/footer";
import Home from "./scripts/Home";
import AboutUs from "./scripts/About-us";
import React from "react";
import ReactDOM from "react-dom/client";

if (document.querySelector("#render-react")) {
  const root = ReactDOM.createRoot(document.querySelector("#render-react"));
  root.render(<Home />);
}

if (document.querySelector("#about-us")) {
  const root = ReactDOM.createRoot(document.querySelector("#about-us"));
  root.render(<AboutUs />);
}

if (document.querySelector("#header")) {
  const root = ReactDOM.createRoot(document.querySelector("#header"));
  root.render(<Header />);
}

if (document.querySelector("#footer")) {
  const root = ReactDOM.createRoot(document.querySelector("#footer"));
  root.render(<Footer />);
}
