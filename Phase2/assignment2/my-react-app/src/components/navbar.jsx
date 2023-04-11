import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
          <Link to="/"> Home </Link>
        <Link to="/shop"> Shop </Link>
          {/*<Link to="/ContactUs"> ContactUs</Link>*/}

           <Link to="/AboutUs"> AboutUs </Link>
           <Link to="/Billing">Checkout</Link>
           <Link to="/ContactUs">ContactUs</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
