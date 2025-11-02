import React from "react";
import "../css/base.css";
import "../css/home.css";

import HeroSection from "../components/HeroSection.jsx";
import Slideshow from "../components/Slideshow.jsx";
import ProcessSteps from "../components/ProcessSteps.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />

      <hr />

      <section className="center">
        <h2>Featured Looks</h2>
        <p className="muted">Tap through recent favorite outfits.</p>
        <Slideshow />
      </section>

      <hr />

      <ProcessSteps />
    </>
  );
}
