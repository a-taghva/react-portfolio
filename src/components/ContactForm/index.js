import React from 'react';

function ContactForm() {
  return(
    <form>
      <fieldset>
        <legend>Contact</legend>
        <div class="f-row">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div class="f-row">
          <label htmlFor="email">Email address:</label>
          <input type="email" id="email" />
        </div>
        <div class="f-row">
          <label htmlFor="message">Message:</label>
          <textarea id="message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  )
}

export default ContactForm;