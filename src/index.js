import Person from "./scripts/Person";
import Header from "./scripts/header";
import Footer from "./scripts/footer";
import ExampleReactComponent from "./scripts/ExampleReactComponent";
import React from "react";
import ReactDOM from "react-dom/client";

const person1 = new Person("Brad");
if (document.querySelector("#render-react")) {
  const root = ReactDOM.createRoot(document.querySelector("#render-react"));
  root.render(<ExampleReactComponent />);
}

if (document.querySelector("#header")) {
  const root = ReactDOM.createRoot(document.querySelector("#header"));
  root.render(<Header />);
}

if (document.querySelector("#footer")) {
  const root = ReactDOM.createRoot(document.querySelector("#footer"));
  root.render(<Footer />);
}
