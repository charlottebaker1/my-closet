import React from "react";
import ClosetItem from "./ClosetItem.jsx";
import "../css/base.css";

import frilltop from "../images/frilltop.png";
import redheels from "../images/miniheels.png";
import shorts from "../images/shorts.png";
import sweatshirt from "../images/sweatshirt.png";
import sneakers from "../images/sneakers.png";
import sweater from "../images/sweater.png";

export default function ClosetGrid() {
  const items = [
    { img: frilltop, title: "Cute Top" },
    { img: redheels, title: "Mini Heels" },
    { img: shorts, title: "Denim Shorts" },
    { img: sweatshirt, title: "Grey Sweatshirt" },
    { img: sneakers, title: "Sneakers" },
    { img: sweater, title: "Brown Sweater" },
  ];

  return (
    <section id="closet-grid">
      {items.map((item, i) => (
        <ClosetItem key={i} img={item.img} title={item.title} />
      ))}
    </section>
  );
}
