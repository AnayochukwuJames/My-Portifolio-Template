import React from "react";
import "./InputSection.css";
import "./ContactDetailsSection.css";

const ContactSection = () => {
  return (
    <div className="ContactSectionWrapper">
      <div className="InputSection">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" rows="4"></textarea>
        <button>Contact Now</button>
      </div>
      <div className="ContactDetailsSection">
        <h2>Contact Details</h2>
        <p>
          Plus 30 Orchid Road,
          Opposite Orchid Hotel,
          Lekki peninsula II 106104
          Lagos State, Nigeria.

          <br />
          Email: anayochukwujames11@gmail.com
          <br />
          Phone: +12347066929216
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
