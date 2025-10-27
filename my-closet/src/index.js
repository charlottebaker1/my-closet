import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./css/base.css";

import Layout from "./Layout.jsx";

import Home from "./pages/Home.jsx";
import Closet from "./pages/Closet.jsx";
import CreateOutfit from "./pages/CreateOutfit.jsx";
import Lookbook from "./pages/Lookbook.jsx";
import UploadItem from "./pages/UploadItem.jsx";
import Contact from "./pages/Contact.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/closet" element={<Closet />} />
          <Route path="/create-outfit" element={<CreateOutfit />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/upload-item" element={<UploadItem />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
