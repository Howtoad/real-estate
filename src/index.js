import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import House from "./views/House";
import PropertiesForSale from "./views/PropertiesForSale";
import AgentsTemplate from "./templates/AgentsTemplate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/boliger/:id" element={<House />} />
          <Route path="/boliger" element={<PropertiesForSale />} />
          <Route path="/maeglere" element={<AgentsTemplate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
