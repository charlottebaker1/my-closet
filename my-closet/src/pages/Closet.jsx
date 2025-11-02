import React from "react";
import "../css/base.css";

import ClosetFilters from "../components/ClosetFilters.jsx";
import ClosetGrid from "../components/ClosetGrid.jsx";

export default function Closet() {
  return (
    <>
      <section className="center">
        <h2>WELCOME TO YOUR CLOSET!</h2>
      </section>

      <ClosetFilters />

      <hr />

      <ClosetGrid />

      <div className="center" style={{ margin: "30px 0" }}>
        <a className="btn" href="/upload-item">Add More Items</a>
      </div>
    </>
  );
}
