import React, {useEffect, useState} from 'react';
import './HomePage.css';
import SimpleImageSlider from "react-simple-image-slider";
export default function App() {
    const sliderImages = [
        {
            url:"images/hp1.jpg",
        },
        {
            url:"images/hp2.jpg",
        },
        {
            url:"images/16.jpg",
        },
    ];

    return (
        <div className="home">
            <h1>MY SHOP</h1>
            <div className="banner">
                <SimpleImageSlider
                    width={1848}
                    height={700}
                    images={sliderImages}
                    showNavs={true}
                    slideDuration={0.8}
                    autoPlay={true}

                />
            </div>
        </div>
    );
}
