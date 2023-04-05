import React from "react";

import bannerImage from './images/q.jpeg';



const HomePage = () => {
  return (
    <div className="home">
      <div className="banner">
        <img className="banner1"src={bannerImage} alt="Banner"/>
        </div>
      
          <h1>Welcome to the home page</h1>
          <p>This is the home page of our app.</p>
      </div>
  );
};

export default HomePage;