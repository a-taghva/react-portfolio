import React, { useState } from 'react';
import ContactForm from '../ContactForm';
import SocialMedia from '../SocialMedia';

function Contact() {
  return(
      <section id="contact-me">
        <ContactForm />
        <SocialMedia />
      </section>
  )
} 

export default Contact;