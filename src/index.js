import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import PropertiesForSale from "./views/PropertiesForSale";
import House from "./views/House";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/boliger" element={<PropertiesForSale />} />
          <Route path="/boliger/:id" element={<House />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
