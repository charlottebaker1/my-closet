import React from "react";
import "../css/closetItem.css";

export default function ClosetItem({ imgUrl, title, onClick }) {
  return (
    <div className="closet-item" onClick={onClick} role="button" tabIndex={0}>
      <img className="closet-thumb" src={imgUrl} alt={title} />
      <h3>{title}</h3>
      <p><span className="btn">View / Edit Item</span></p>
    </div>
  );
}
