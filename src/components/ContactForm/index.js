import React from 'react';

function ContactForm() {
  return(
    <form id="contact">
      <h2 class="section-title">Contact</h2>
      <div class="contact-field">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
      </div>
      <div class="contact-field">
        <label htmlFor="email">Email address:</label>
        <input type="email" id="email" />
      </div>
      <div class="contact-field">
        <label htmlFor="message">Message:</label>
        <textarea id="message" rows="7"></textarea>
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  )
}

export default ContactForm;