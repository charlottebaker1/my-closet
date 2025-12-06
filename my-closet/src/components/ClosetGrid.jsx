import React from "react";
import ClosetItem from "./ClosetItem.jsx";
import "../css/base.css";

export default function ClosetGrid({ items, onOpen }) {
  return (
    <section id="closet-grid">
      {items.map((item) => (
        <div className="item" key={item._id}>
          <ClosetItem
            imgUrl={item.imgUrl}
            title={item.title}
            onClick={() => onOpen(item)}
          />
        </div>
      ))}
    </section>
  );
}
