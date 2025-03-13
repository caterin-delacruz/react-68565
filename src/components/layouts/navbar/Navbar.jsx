import CartWidget from "../../common/cartWidget/CartWidget";
import { Link } from "react-router";
import "../navbar/navBar.css";
import logo1 from "../../../assets/img/logo.png";

const Navbar = () => {
    return (
        <div className="navbar">
            
            <Link to="/" >
                <img className="navbar-logo" src={logo1} />
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