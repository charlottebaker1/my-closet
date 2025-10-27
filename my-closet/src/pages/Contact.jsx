import React from "react";
import "../css/base.css";
import "../css/contact.css";

export default function Contact() {
  return (
    <>
      <section className="center">
        <h2>Contact Us</h2>
        <p className="muted">
          Questions, feedback, or ideas? We would love to hear from you.
        </p>
      </section>

      <section className="columns" style={{ marginTop: "20px" }}>
        <section className="two card contact-card">
          <h3>Send us a message</h3>
          <p className="muted">Contact form will go here in a later part.</p>

          <div className="fake-input">Name</div>
          <div className="fake-input">Email</div>
          <div className="fake-input">Topic</div>
          <div className="fake-input" style={{ minHeight: "120px" }}>
            Message
          </div>

          <button className="btn" type="button" style={{ marginTop: "12px" }}>
            Send Message
          </button>
        </section>

        <section className="one card contact-side-card">
          <h3>Reach Us</h3>
          <p><strong>Email:</strong> charlotterb3@gmail.com</p>
          <p><strong>Phone:</strong> (720) 418-0188</p>
          <p className="muted">Columbia, SC</p>
        </section>
      </section>
    </>
  );
}
