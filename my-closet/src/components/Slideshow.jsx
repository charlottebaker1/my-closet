import React, { useState } from "react";
import "../css/slideshow.css";

import featured1 from "../images/featured1.png";
import featured2 from "../images/featured2.png";
import featured3 from "../images/featured3.png";

export default function Slideshow() {
  const [idx, setIdx] = useState(0);

  const images = [featured1, featured2, featured3];

  const next = () => {
    setIdx(idx < images.length - 1 ? idx + 1 : 0);
  };

  const prev = () => {
    setIdx(idx > 0 ? idx - 1 : images.length - 1);
  };

  return (
    <section id="slideshow">
      <img
        className="slide-img"
        src={images[idx]}
        alt={"Featured look " + (idx + 1)}
      />

      <button
        className="arrow"
        id="left-arrow"
        type="button"
        onClick={prev}
        aria-label="Previous outfit"
      >
        &lt;
      </button>

      <button
        className="arrow"
        id="right-arrow"
        type="button"
        onClick={next}
        aria-label="Next outfit"
      >
        &gt;
      </button>
    </section>
  );
}
