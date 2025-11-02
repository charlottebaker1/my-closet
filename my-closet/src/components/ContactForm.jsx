import React, { useState } from "react";
import "../css/base.css";
import "../css/contact.css";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append("access_key", "baf82b0b-0392-4490-8e23-04acae04b537");

    formData.append("botcheck", "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message || "Something went wrong.");
    }
  };

  return (
    <section className="contact-wrapper">
      <form className="contact-card" onSubmit={onSubmit}>
        <div className="contact-grid">
          <div className="contact-field half">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />
          </div>

          <div className="contact-field half">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>

          <div className="contact-field full">
            <label htmlFor="topic">Topic</label>
            <select id="topic" name="topic">
              <option value="general">General</option>
              <option value="bug">Bug Report</option>
              <option value="feature">Feature Request</option>
            </select>
          </div>

          <div className="contact-field full">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
        </div>

        <button className="btn" type="submit">Send Message</button>

        <div id="contact-result" className="contact-status muted">
          {result}
        </div>
      </form>
    </section>
  );
}
