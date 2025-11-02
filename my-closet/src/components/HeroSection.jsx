import React from "react";
import "../css/home.css";
import heroImg from "../images/hero.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero-banner">
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
  );
}
