import React from "react";
import "../css/base.css";
import "../css/home.css";

import frilltop from "../images/frilltop.png";
import shorts from "../images/shorts.png";
import sneakers from "../images/sneakers.png";

export default function Lookbook() {
  return (
    <>
      <section className="center">
        <h2>LOOKBOOK</h2>
        <p className="muted">Saved outfits you can wear again.</p>
      </section>

      <section className="columns" style={{ marginTop: "20px" }}>
        <section className="two">
          <div className="card" style={{ marginBottom: "20px" }}>
            <div className="grid">
              <div className="tile"><img src={frilltop} alt="top" /></div>
              <div className="tile"><img src={shorts} alt="bottom" /></div>
              <div className="tile"><img src={sneakers} alt="shoes" /></div>
            </div>
            <h3>DINNER</h3>
            <p>
              <button className="btn" type="button">View</button>
            </p>
          </div>

          <div className="card">
            <div className="grid">
              <div className="tile"><img src={frilltop} alt="top" /></div>
              <div className="tile"><img src={shorts} alt="bottom" /></div>
              <div className="tile"><img src={sneakers} alt="shoes" /></div>
            </div>
            <h3>GAME OUTFIT</h3>
            <p>
              <button className="btn" type="button">View</button>
            </p>
          </div>
        </section>

        <aside className="two">
          <div className="card" style={{ marginBottom: "20px" }}>
            <p className="muted">
              More looks coming soon...
            </p>
          </div>
        </aside>
      </section>

      <div className="center" style={{ margin: "30px 0" }}>
        <p><strong>Need Something Different?</strong></p>
        <a className="btn" href="/create-outfit">Create Outfit</a>
      </div>
    </>
  );
}
