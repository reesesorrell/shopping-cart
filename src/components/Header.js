import "../style/header.css"
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = ({darkMode, cart}) => {

    const [cartDisplay, setCartDisplay] = useState([]);

    const createCart = () => {
        setCartDisplay([
        <div key='1' className="black-screen"></div>,
        <div key='2' className="cart-sidebar">
            <div onClick={clearCartSidebar} className="cart-sidebar-x">X</div>
        </div>
    ]);
    }

    const clearCartSidebar = () => {
        setCartDisplay([]);
    }

    return (
        <div>
            {cartDisplay}
            <div className={darkMode ? "darkHeader" : "lightHeader"}>
                <Link to="/" className="title">Sorrell Games</Link>
                <div className="right-header-container">
                    <Link to="/catalog">Shop</Link>
                    <div className="header-button">Search</div>
                    <div className="header-button" onClick={createCart}>Bag</div>
                </div>
            </div>
        </div>
    )
}

export default Header;