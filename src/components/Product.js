import { useParams } from "react-router-dom"
import productInfo from "../info/productInfo"
import Header from "./Header";
import "../style/product.css";

const Product = () => {

    let { id } = useParams();

    let currentItem = productInfo[id];

    return (
        <div className="Product" style={{
            background: "linear-gradient(110deg, #f9f5f2 40%, #f0ecec 40%)",}}>
            <Header darkMode={false}/>
            <div className="item-holder">
                <div className="product-title">{currentItem.name}</div>
                <img className="product-image" src={currentItem.frontImg}></img>
                <div className="product-sidebar">
                    <div className="square-logo">SOR<br />REL<br />GAM</div>
                    <div className="product-price">{`$${currentItem.price}`}</div>
                    <button className="add-to-cart">ADD TO CART</button>
                    <button className="buy-it-now">BUY IT NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Product;