import React from "react";
import "../css/base.css";
import "../css/closet.css";

export default function UploadItem() {
  return (
    <>
      <section className="center">
        <h2>UPLOAD ITEM</h2>
        <p className="muted">Add something new to your closet.</p>
      </section>

      <section className="columns" style={{ marginTop: "20px" }}>
        <section className="three card">
          <p className="muted">Upload Photo:</p>
          <div className="fake-input">Choose file…</div>

          <p className="muted">Title:</p>
          <div className="fake-input">Please enter</div>
        </section>

        <aside className="two sidebar">
          <p><strong>Type:</strong></p>
          <p><label><input type="checkbox" /> Top</label></p>
          <p><label><input type="checkbox" /> Pants</label></p>
          <p><label><input type="checkbox" /> Sweater</label></p>
          <p><label><input type="checkbox" /> Shorts</label></p>
          <p><label><input type="checkbox" /> Shoes</label></p>

          <hr />

          <p><strong>Season:</strong></p>
          <p><label><input type="checkbox" /> Summer</label></p>
          <p><label><input type="checkbox" /> Winter</label></p>
        </aside>
      </section>

      <div className="center" style={{ margin: "30px 0" }}>
        <a className="btn" href="/closet">Save Item To Closet</a>
      </div>
    </>
  );
}
