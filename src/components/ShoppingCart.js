import { useEffect, useState } from "react";
import productInfo from "../info/productInfo";
import "../style/shoppingCart.css"

const ShoppingCart = ({addToCart, removeFromCart, cart}) => {

    const formatCategoryName = (name) => {
        const words = name.split("-");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        let category = words.join(" ");

        return category;
    }

    let items = [];
    for(let k in cart) {
    let quantity = cart[k];
    let name = productInfo[k].name;
    let price = productInfo[k].price;
    let category = productInfo[k].category;
    items.push(
        <div className="cart-product-container" key={k}>
            <div className="cart-image-area">
                <img src={productInfo[k].frontImg} className="cart-image"></img>
            </div>
            <div className="cart-info-container">
                <div className="cart-category">{formatCategoryName(category)}</div>
                <div className="cart-name">{name}</div>
                <div className="quantity-container">
                    <div id={k} onClick={removeFromCart} className="change-quantity-button">-</div>
                    <div className="cart-quantity">{quantity}</div>
                    <div id={k} onClick={addToCart} className="change-quantity-button">+</div>
                </div>
            </div>
            <div>
                {`$${price}`}
            </div>
        </div>
    )
    }

    return (
        <div key={cart} className="ShoppingCart">
            {items}
            {console.log(items.length)}
        </div>
    )
}

export default ShoppingCart;