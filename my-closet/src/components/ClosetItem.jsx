import React from "react";
import "../css/closetItem.css";

export default function ClosetItem({ imgSrc, title }) {
  return (
    <div className="closet-item">
      <img className="closet-thumb" src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p><a className="btn" href="#">View / Edit Item</a></p>
    </div>
  );
}
