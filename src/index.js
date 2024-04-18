import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App v-3";
// import Starrating from "./Starrating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Starrating
      maxRating={5}
      messages={["Bad", "Good", "Average", "Best", "Amazing"]}
    />
    <Starrating maxRating={5} defaultRating={3} /> */}
  </React.StrictMode>
);
