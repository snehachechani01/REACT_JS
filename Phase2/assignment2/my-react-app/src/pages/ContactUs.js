import React from 'react';
import './ContactUs.css';
const ContactUs = () => {
  return (
    <div>
         <div class="address">
      <h1>Our Address</h1>
      <p>123 Main St, Anytown USA</p>
    </div>
    <div class="contact">
      <h1>Contact Us</h1>
      <p>Please fill out the form below to get in touch with us.</p>
      </div>
      <form>
        <div class="contactme">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div class="contactme">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <div class="contactme">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div class="contactme">
          <label htmlFor="query">Query:</label>
          <input type="text" id="query" name="query" required/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
