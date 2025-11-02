import React from "react";
import { Link } from "react-router-dom";
import "../css/base.css";

export default function ProcessSteps() {
  return (
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
  );
}
