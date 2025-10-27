import React from "react";
import { Link } from "react-router-dom";

import "../css/base.css";
import "../css/home.css";


import heroImg from "../images/hero.png";
import featured1 from "../images/featured1.png";
import featured2 from "../images/featured2.png";
import featured3 from "../images/featured3.png";

export default function Home() {
  return (
    <>
      {}
      <section className="hero-banner">
        {}
        <img className="hero-bg" src={heroImg} alt="Featured outfit" />

        <div className="hero-card">
          <h2>Organize. Create. Style.</h2>
          <p>
            Build your digital closet, plan outfits quickly, and keep your
            favorites ready for any day.
          </p>
          <p>
            <Link className="btn" to="/create-outfit">
              Make an Outfit
            </Link>
          </p>
        </div>
      </section>

      <hr />

      {}
      <section id="home-gallery" className="grid">
        <div className="tile"><img src={featured2} alt="Look 1" /></div>
        <div className="tile"><img src={featured1} alt="Look 2" /></div>
        <div className="tile"><img src={featured3} alt="Look 3" /></div>
      </section>

      <hr />

      {}
      <section className="center">
        <h2>The Process</h2>

        <div className="columns">
          <section className="one center card">
            <h3>Add Clothing</h3>
            <p className="muted">
              Snap and upload each piece. Tag by type, color, season, and brand.
            </p>
            <p><Link className="btn" to="/upload-item">Add Item</Link></p>
          </section>

          <section className="one center card">
            <h3>Get Creative</h3>
            <p className="muted">
              Move items into the outfit creator to make complete looks.
            </p>
            <p><Link className="btn" to="/create-outfit">Create Outfit</Link></p>
          </section>

          <section className="one center card">
            <h3>Pick Your Look</h3>
            <p className="muted">
              Browse your lookbook and choose what to wear without overthinking.
            </p>
            <p><Link className="btn" to="/lookbook">Pick to Wear</Link></p>
          </section>
        </div>
      </section>
    </>
  );
}
