import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="indexStyle">
    <StarRating rating={2} />
  </div>
);

// const root2 = ReactDOM.createRoot(document.getElementById("root"));

// root2.render(
//   <div>
//     <StarRating rating={2} />
//   </div>
// );
