import CartWidget from "../../common/cartWidget/CartWidget";
import { Link } from "react-router";
import "./navbar.css";


const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="navbar-logo">
                <img
                    src="https://res.cloudinary.com/dxfcbvvyb/image/upload/v1744252795/logo_hj4vts.png"
                    alt=""
                    className="navbar-logo-img"
                />
            </Link>
            
            <ul className="navbar-links">
                <Link to="/" className="navbar-link">HOME</Link>
                <Link to="/category/pestañas" className="navbar-link">INSUMO PESTAÑAS</Link>
                <Link to="/category/descartables" className="navbar-link">DESCARTABLES</Link>
                <Link to="/category/accesorios" className="navbar-link">ACCESORIOS</Link>
            </ul>
            <Link to="/cart" className="navbar-cart">
                <CartWidget />
            </Link>
        </div>
    );
};

export default Navbar;