import React from "react";
import "../css/base.css";

export default function ClosetFilters() {
  return (
    <section className="columns">
      <aside className="one">
        <h3><em>Find what you're looking for...</em></h3>
      </aside>

      <section className="three">
        <div className="columns">
          <div className="one">
            <p className="muted">Type</p>
            <div className="fake-select">Pants</div>
          </div>
          <div className="one">
            <p className="muted">Color</p>
            <div className="fake-select">White</div>
          </div>
          <div className="one">
            <p className="muted">Season</p>
            <div className="fake-select">Winter</div>
          </div>
        </div>

        <p>
          <span className="tag">Top</span>
          <span className="tag">Green</span>
        </p>
      </section>
    </section>
  );
}
