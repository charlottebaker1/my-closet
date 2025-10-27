import React from "react";
import "../css/base.css";
import "../css/closet.css";

import ClosetItem from "../components/ClosetItem.jsx";

import frilltop from "../images/frilltop.png";
import shorts from "../images/shorts.png";
import sweatshirt from "../images/sweatshirt.png";
import jeans from "../images/jeans.png";
import sneakers from "../images/sneakers.png";
import sweater from "../images/sweater.png";

export default function Closet() {
  return (
    <>
      <section className="center">
        <h2>WELCOME TO YOUR CLOSET!</h2>
      </section>

      <section className="columns">
        <aside className="one">
          <h3><em>Find what you're looking for…</em></h3>
        </aside>

        <section className="three">
          <form className="toolbar">
            <div>
              <label className="muted">Type</label>
              <select className="filter-select">
                <option>All</option>
                <option>Top</option>
                <option>Pants</option>
                <option>Shoes</option>
              </select>
            </div>

            <div>
              <label className="muted">Color</label>
              <select className="filter-select">
                <option>All</option>
                <option>White</option>
                <option>Blue</option>
                <option>Black</option>
              </select>
            </div>

            <div>
              <label className="muted">Season</label>
              <select className="filter-select">
                <option>All</option>
                <option>Spring</option>
                <option>Summer</option>
                <option>Fall</option>
                <option>Winter</option>
              </select>
            </div>
          </form>
        </section>
      </section>

      <hr />

      <section id="closet-grid">
        <ClosetItem imgSrc={frilltop}   title="Cute Top" />
        <ClosetItem imgSrc={shorts}     title="Denim Shorts" />
        <ClosetItem imgSrc={sweatshirt} title="Grey Sweatshirt" />
        <ClosetItem imgSrc={jeans}      title="Favorite Jeans" />
        <ClosetItem imgSrc={sneakers}   title="Sneakers" />
        <ClosetItem imgSrc={sweater}    title="Brown Sweater" />
      </section>

      <div className="center" style={{ margin: "30px 0" }}>
        <a className="btn" href="#">Load More Items</a>
        &nbsp;&nbsp;
        <a className="btn" href="/upload-item">Add More Items</a>
      </div>
    </>
  );
}
