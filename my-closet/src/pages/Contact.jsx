import React from "react";
import "../css/base.css";
import "../css/contact.css";
import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
  return (
    <>
      <section className="center">
        <h2>Contact Us</h2>
        <p className="muted">
          Questions, feedback, or ideas? We would love to hear from you.
        </p>
      </section>

      <ContactForm />
    </>
  );
}
