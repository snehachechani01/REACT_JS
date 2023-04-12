import React from 'react';
import './ContactUs.css';
import axios from 'axios';

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send');

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');

    const formData = new FormData(e.target);

    axios.post('http://localhost/REACT_JS/Phase2/assignment2/my-react-app/php/saveForm.php', formData)
      .then((response) => {
        if (response.status === 200) {
          setFormStatus('Submitted');
        } else {
          setFormStatus('Error');
        }
      })
      .catch((error) => {
        console.error(error);
        setFormStatus('Error');
      });

    axios.post('http://localhost/REACT_JS/Phase2/assignment2/my-react-app/php/sendEmail.php', formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="main-contact">
      <header className="head-contact">
        {/* <div className="contact-text">Contact Us</div> */}
        <img id="img-contact" src="/images/cus.jpeg" alt="Contact Us"/>
      </header>
      <div className="container my-4">
        <div className="contact-content">
          <h1>Our Address: 123 Main Street, Anytown USA</h1>
        </div>
        <form onSubmit={onSubmit} className="contact-form">
          <div className="form-group">
            <label className="form-label" htmlFor="fname">
              First Name
            </label>
            <input className="form-control" type="text" id="fname" name="fname" required />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="lname">
              Last Name
            </label>
            <input className="form-control" type="text" id="lname" name="lname" required />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="phone">
              Phone Number
            </label>
            <input className="form-control" type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" name="message" required />
          </div>
          <button className="btn btn-danger" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
      <footer class="footer">
                <div class="footer-col">
                    <h3>GET TO KNOW US</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press Releases</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>CONNECT WITH US</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>CONSUMER POLICY</h3>
                    <ul>
                        <li><a href="#">Return Policy</a></li>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">Security</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>HELP</h3>
                    <ul>
                        <li><a href="#">Payments</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Returns</a></li>
                    </ul>
                </div>
                <div class="copyright">
                <p>© Copyright 2023 My Shop. All rights reserved.</p>
                </div>
            </footer> 

     
    </div>
  );
};

export default ContactForm;
