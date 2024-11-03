import Header from "./scripts/header";
import Footer from "./scripts/footer";
import Home from "./scripts/pages/Home";
import AboutUs from "./scripts/About-us";
import OurServices from "./scripts/OurServices";
import ServiceDetails from "./scripts/ServiceDetails";
import Article from "./scripts/pages/Article";
import ArticleDetails from "./scripts/pages/ArticleDetail";
import React from "react";
import ReactDOM from "react-dom/client";
import OurDoctors from "./scripts/OurDoctors";

if (document.querySelector("#render-react")) {
  const root = ReactDOM.createRoot(document.querySelector("#render-react"));
  root.render(<Home />);
}

if (document.querySelector("#article")) {
  const root = ReactDOM.createRoot(document.querySelector("#article"));
  root.render(<Article />);
}

if (document.querySelector("#article-details")) {
  const root = ReactDOM.createRoot(document.querySelector("#article-details"));
  root.render(<ArticleDetails />);
}

if (document.querySelector("#about-us")) {
  const root = ReactDOM.createRoot(document.querySelector("#about-us"));
  root.render(<AboutUs />);
}

if (document.querySelector("#our-services")) {
  const root = ReactDOM.createRoot(document.querySelector("#our-services"));
  root.render(<ServiceDetails />);
}

if (document.querySelector("#our-doctors")) {
  const root = ReactDOM.createRoot(document.querySelector("#our-doctors"));
  root.render(<OurDoctors />);
}

if (document.querySelector("#header")) {
  const root = ReactDOM.createRoot(document.querySelector("#header"));
  root.render(<Header />);
}

if (document.querySelector("#footer")) {
  const root = ReactDOM.createRoot(document.querySelector("#footer"));
  root.render(<Footer />);
}
