import "../style/header.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ShoppingCart from "./ShoppingCart";
import productInfo from "../info/productInfo";

const Header = ({darkMode, cart, displaySidebar=false}) => {

    const [cartDisplay, setCartDisplay] = useState([]);

    const [isInitialMount, setIsInitialMount] = useState(true);

    useEffect(() => {
        if (isInitialMount) {
            setIsInitialMount(false);
         } else {
            createCart();
        }
    }, [displaySidebar]);

    const createCart = () => {
        let totalPrice = 0;
        for (let k in cart) {
            totalPrice += productInfo[k].price * cart[k];
        }
        setCartDisplay([
        <div key='1' className="black-screen"></div>,
        <div key='2' className="cart-sidebar">
            <div onClick={clearCartSidebar} className="cart-sidebar-x">X</div>
            <div className="cart-title">Your<br /> Shopping <br /> Cart</div>
            <ShoppingCart cart={cart}/>
            <div className="total-price-display">{`Subtotal:  $${totalPrice.toFixed(2)}`}</div>
            <button className="checkout-button">CHECKOUT</button>
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
                    <div className="header-button bag-button" onClick={createCart}>Bag - {Object.keys(cart).length}</div>
                </div>
            </div>
        </div>
    )
}

export default Header;