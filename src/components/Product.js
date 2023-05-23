import { useParams } from "react-router-dom"
import productInfo from "../info/productInfo"
import Header from "./Header";
import "../style/product.css";
import { useState } from "react";

const Product = ({addToCart, cart}) => {

    let { id } = useParams();

    let currentItem = productInfo[id];

    const [displaySidebar, setDisplaySidebar] = useState(false);


    const addToCartAndOpen = (e) => {
        addToCart(e);
        setDisplaySidebar(!displaySidebar);
    }

    return (
        <div className="Product" style={{
            background: "linear-gradient(110deg, #f9f5f2 40%, #f0ecec 40%)",}}>
            <Header darkMode={false} cart={cart} displaySidebar={displaySidebar}/>
            <div className="item-holder">
                <div className="product-title">{currentItem.name}</div>
                <img className="product-image" src={currentItem.frontImg}></img>
                <div className="product-sidebar">
                    <div className="square-logo">SOR<br />REL<br />GAM</div>
                    <div className="product-price">{`$${currentItem.price}`}</div>
                    <button className="add-to-cart" onClick={addToCart} id={id}>ADD TO CART</button>
                    <button className="buy-it-now" onClick={addToCartAndOpen} id={id}>BUY IT NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Product;