import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          {/* <Route path="/" element={<Home />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
