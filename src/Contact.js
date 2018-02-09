import React from 'react';
import ContactForm from './ContactForm.js';
import ContactInfo from './ContactInfo.js';
const Contact = () => {
  return(
    <div className="main-content">
      <span className="topspan">Send Me A Message!</span>
      <ContactForm/>
      <span className="topspan">Or</span>
      <ContactInfo/>

    </div>
  )
};
export default Contact;
