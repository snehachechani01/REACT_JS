import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
 import { Shop } from "./pages/shop/shop";
 import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage"
import { Cart } from "./pages/cart/cart";


import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />

            {<Route path="/AboutUs" element={<AboutUs />} /> }
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}
export default App;