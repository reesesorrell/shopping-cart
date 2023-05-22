import productInfo from "../info/productInfo";
import "../style/shoppingCart.css"

const ShoppingCart = ({cart}) => {

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
                    <div className="cart-category">{category}</div>
                    <div className="cart-name">{name}</div>
                    <div className="quantity-container">
                        <div className="change-quantity-button">-</div>
                        <div className="cart-quantity">{quantity}</div>
                        <div className="change-quantity-button">+</div>
                    </div>
                </div>
                <div>
                    {`$${price}`}
                </div>
            </div>
        )
    }

    return (
        <div className="ShoppingCart">
            {items}
        </div>
    )
}

export default ShoppingCart;