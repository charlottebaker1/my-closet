import React from "react";
import { Outlet } from "react-router-dom";

import "./css/base.css";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function Layout() {
  return (
    <div id="content">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

