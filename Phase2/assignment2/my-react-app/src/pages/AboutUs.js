import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="banner">
        <img src="images/hp1.jpg" alt="MyShop Banner" />
      </div>
      <h1>About MyShop</h1>
      <p>MyShop is a leading watch and accessories brand based in India. Founded in 1984, Titan has since become one of the most trusted and respected names in the industry, with a wide range of products designed to suit every taste and budget.</p>
      
      <h2>Our Team</h2>
      <p>Our team at MyShop is made up of a group of talented individuals who are passionate about creating beautiful and sustainable products. From our lead designer John Doe, to our lead engineer Jane Smith, to our lead craftsman Michael Brown, each member of our team brings their own unique set of skills and expertise to the table.

Together, we work tirelessly to ensure that every product we create is not only functional and stylish, but also made with the utmost care and attention to detail. We believe in using sustainable and ethically sourced materials whenever possible, and we are committed to reducing our impact on the environment.

We are proud of the work we do at MyShop, and we are dedicated to providing our customers with the very best products and service. If you have any questions or feedback, please don't hesitate to reach out to us – we would love to hear from you!</p>
<h2>Our Mission</h2>
      <p>enhance our customers' lives while minimizing our impact on the environment. We believe that everyone deserves access to high-quality products that are made with care and attention to detail, and we are committed to creating a better world through responsible manufacturing practices.

To achieve this mission, we work tirelessly to ensure that every step of our supply chain is as responsible as possible. From sourcing sustainable materials, to reducing waste and emissions in our manufacturing processes, to supporting local communities and ethical labor practices, we are always looking for ways to do better.

We are proud of the work we do at MyShop, and we are always striving to improve and innovate. Whether you're looking for a new watch or accessory, or just want to learn more about our commitment to sustainability, we invite you to explore our website and join us on our mission to create a better world.</p>
      <div className="team-container">
        <div className="team-members">
         
        </div>
        {/* <div className="team-image">
          <img src="images/16.jpg" alt="Team Image" />
        
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;
