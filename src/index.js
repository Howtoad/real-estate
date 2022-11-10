import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import House from "./views/House";
import PropertiesForSale from "./views/PropertiesForSale";
import AgentsTemplate from "./templates/AgentsTemplate";
import ContactAgent from "./views/ContactAgent";
import Login from "./views/Login";
import { UserProvider } from "./context/UserContext";
import NotFound from "./views/NotFound";
import Favorites from "./views/Favorites";
import Contact from "./views/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/boliger/:id" element={<House />} />
            <Route path="/boliger" element={<PropertiesForSale />} />
            <Route path="/maeglere/:id" element={<ContactAgent />} />
            <Route path="/maeglere" element={<AgentsTemplate />} />
            <Route path="/favoritter" element={<Favorites />} />
            <Route path="/login" element={<Login />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
