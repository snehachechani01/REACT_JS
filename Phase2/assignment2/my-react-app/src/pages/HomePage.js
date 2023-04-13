import React, { useEffect, useState } from 'react';
import './HomePage.css';
import SimpleImageSlider from 'react-simple-image-slider';

export default function App() {
    const sliderImages = [
        {
            url: 'images/hp1.jpg',
        },
        {
            url: 'images/hp2.jpg',
        },
        {
            url: 'images/16.jpg',
        },
    ];

    const testimonials = [
        {
            id: 1,
            text: "We have been using SunTec's services for the past year to tag products with qualitative attributes. Their work has been pivotal in us being able to deploy new products that leverage the data that their team has provided. They have been super helpful, responsive, and diligent in the work that they've provided. We look forward to maintaining our relationship for the long term",
            author: 'John Slith',
            imageUrl:'images/testi1.jpeg'
            

        },
        {
            id: 2,
            text: "I am pleased with the services SunTec has provided me to modify the design and functionality of my online shopping website. Its X-Cart development services helped my online business grow. I would really like to work with SunTec again.",
            author: 'Jane Smith',
            imageUrl:'images/testi2.jpeg'

        },
        {
            id: 3,
            text: "I was looking for Zen Cart Development service for my business. After surveying many companies, the search ended with SunTec India. I was really impressed with the way they catered to my requirements. They provided me cost-effective solutions, and I hope to work with them in the near future.",
            author: 'Mane Smith',
            imageUrl:'images/testi3.jpeg'

        },
    ];

    return (
        <div className="home">
            <h1>MY SHOP</h1>

            <div className="banner">
                {/* <img src="images/9.png" alt="Banner" /> */}
                <SimpleImageSlider
                    width={1828}
                    height={700}
                    images={sliderImages}
                    showNavs={true}
                    slideDuration={0.8}
                    autoPlay={true}
                />
                <h3>
                    Let us help you reach your audience We are a digital marketing agency in remote location of India that handles all your online broadcasting strategies for better reach to a broader range of Online Products. We communicate your business with most compelling marketing strategies and creative ideas.
                </h3>
                <h3>
                    Do you have a great idea? Let's bring it together
                    No matter what your budget or project, we make it easy to get started. You'll work directly with an great product who will listen to you and help bring your idea to life on the Web.


                </h3>
                <h3>We provide Graphic Best Products that make your Home beautiful
                    Graphic Design from DS Tech is a leading graphic design agency in India providing hands on experience to worldwide clients.</h3>
                <img src="images/elect.jpg" alt="Banner" />
                <div className="product-images">
                    <img src="images/ms2.jpg" alt="Product 1" />
                    <img src="images/SMM2.jpeg" alt="Product 2" />
                    <img src="images/hp6.jpeg" alt="Product 3" />
                </div>

                <div className="testimonials">
                    <h1><b>What Our Customers Are Saying</b></h1>
                    <div className="testimonial-list">
                        {testimonials.map((testimonial) => (
                            <div className="testimonial-box" key={testimonial.id}>
                                 <img src={testimonial.imageUrl} alt="testimonial" />

                                <p>{testimonial.text}</p>
                                <div className="testimonial-author">
                                    <strong>{testimonial.author}</strong>
                                    <span>{testimonial.jobTitle}</span>
                                </div>


                            </div>

                        ))}
                    </div>

                </div>
            </div>

            <footer className="footer">
                <div className="footer-col">
                    <h3>GET TO KNOW US</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press Releases</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>CONNECT WITH US</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>CONSUMER POLICY</h3>
                    <ul>
                        <li><a href="#">Return Policy</a></li>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">Security</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>HELP</h3>
                    <ul>
                        <li><a href="#">Payments</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Returns</a></li>
                    </ul>
                </div>
                <div className="copyright">
                <p>© Copyright 2023 My Shop. All rights reserved.</p>
                </div>
            </footer>


        </div>

    );
}
