import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const { name, email, message } = formState;
  const [ errorMessage, setErrorMessage ] = useState("");

  function handleChange(e) {
    if (!e.target.value) {
      return setErrorMessage(`${e.target.name} is required!`);
    };

    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      
      if (!isValid) {
        return setErrorMessage('please enter a valid email address');
      } else {
        setErrorMessage('');
      }
    }

    if (e.target.value) {
      setErrorMessage("");
    } 

    setFormState({ ...formState, [e.target.id]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      return setErrorMessage('please enter your name');
    };

    if (!message) {
      return setErrorMessage('please enter your message');
    }

    if (!email) {
      return setErrorMessage('please enter your email');
    }

    if (!errorMessage) {
      console.log('Form:', formState);
    }
  }

  return(
    <form id="contact" onSubmit={handleSubmit}>
      <h2 className="section-title">Contact</h2>
      <div className="contact-field">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" defaultValue={name} onBlur={handleChange} />
      </div>
      <div className="contact-field">
        <label htmlFor="email">Email address:</label>
        <input type="email" id="email" name="email" defaultValue={email} onBlur={handleChange} />
      </div>
      <div className="contact-field">
        <label htmlFor="message">Message:</label>
        <textarea id="message" rows="7" name="message" defaultValue={message} onBlur={handleChange}></textarea>
      </div>
      {errorMessage && (<p style={{ marginBottom: "5px", color: "red" }}>{errorMessage}</p>)}
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  )
}

export default ContactForm;