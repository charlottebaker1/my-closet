import React from "react";
import "../css/base.css";
import "../css/closet.css";

import frilltop from "../images/frilltop.png";
import sweatshirt from "../images/sweatshirt.png";
import jeans from "../images/jeans.png";
import sneakers from "../images/sneakers.png";

export default function CreateOutfit() {
  return (
    <>
      <section className="center">
        <h2>PICK OUT A FIT!</h2>
        <p className="muted">Build a look, add tags, save it.</p>
      </section>

      <section className="columns" style={{ marginTop: "20px" }}>
        <section className="three card">
          <div id="outfit-canvas">
            <img className="a" src={frilltop} alt="Top" />
            <img className="b" src={sweatshirt} alt="Layer" />
            <img className="c" src={jeans} alt="Bottom" />
            <img className="d" src={sneakers} alt="Shoes" />
          </div>
        </section>

        <aside className="two sidebar">
          <h3>Add Tags</h3>
          <p><label><input type="checkbox" /> Fancy</label></p>
          <p><label><input type="checkbox" /> Dinner</label></p>
          <p><label><input type="checkbox" /> Summer Vibe</label></p>
          <p><label><input type="checkbox" /> Everyday</label></p>

          <p className="muted">Custom Tag</p>
          <div className="fake-input">Please enter</div>
        </aside>
      </section>

      <div className="center" style={{ margin: "30px 0" }}>
        <a className="btn" href="/lookbook">Save Outfit!</a>
      </div>
    </>
  );
}
