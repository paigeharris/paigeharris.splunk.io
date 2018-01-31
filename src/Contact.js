import React from 'react';

const Contact = () => {
  return(
    <div className="main-content">
      <h2>Get In Touch!</h2>
      <form>
        <input
          type="text"
          placeholder="Name"
          >
        </input>
        <input
          type="text"
          placeholder="555-555-5555"
          >
        </input>
        <input
          type="text"
          placeholder="person@fakemail.com"
          >
        </input>
        <input
          type="submit"
          >
          
        </input>
      </form>
    </div>
  )
};
export default Contact;
