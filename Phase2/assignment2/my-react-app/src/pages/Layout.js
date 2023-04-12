import {Outlet, Link} from "react-router-dom";
import './Layout.css';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const Layout = () => {
    return (
        <>
            <nav >
                <div className="logo">
<p>SHOP</p>
 </div>

                <ul>
                    <li>

                        <Link to="/">Home</Link>
                        <Link to="/AboutUs">AboutUs</Link>
                        <Link to="/CartPage">CartPage</Link>
                        
                        <Link to="/ContactUS">ContactUS</Link>
                        <Link to="/ProductPage">ProductPage</Link>
                        {/* <Link to="/CartPage"><ShoppingCartIcon /></Link> */}
                        <Link to="/cart">cart</Link>
                       

                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
};

export default Layout;