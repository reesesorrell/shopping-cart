import Header from "./Header"
import "../style/catalog.css"
import productInfo from "../info/productInfo"
import PreviewCard from "./PreviewCards"
import { Link } from "react-router-dom"

const Catalog = ({items, cart}) => {
    let cards =[]
    for (let k in productInfo) {
        if (productInfo[k].category === items || items==="all") {
            cards.push(
                <PreviewCard gameInfo={productInfo[k]} gameKey={k} />
            )
        }
    }
    if (items === "all") {
        var catalogDescription = [<div className="current-category">All</div>,
        <div className="current-category">Products</div>]
    }
    else if (items === "table-top") {
        var catalogDescription = [<div className="current-category">Table Top</div>]
    }
    else if (items === "cards") {
        var catalogDescription = [<div className="current-category">Card Games</div>]
    }
    else if (items === "accessories") {
        var catalogDescription = [<div className="current-category">Accessories</div>]
    }

    return(
        <div className="catalog">
            <Header darkMode={false} cart={cart}/>
            <div className="catalog-contents">
                <div className="catalog-sidebar">
                    <div className="shopping-title">
                        <div>Shop /</div>
                        {catalogDescription}
                    </div>
                    <div className="shopping-options">
                        <Link className="category-name" to="/catalog/table-top">Table Top</Link>
                        <Link className="category-name" to="/catalog/cards">Card Games</Link>
                        <Link className="category-name" to="/catalog/accessories">Accessories</Link>
                    </div>
                </div>
                <div className="catalog-preview">
                    {cards}
                </div>
            </div>
        </div>
    )
}

export default Catalog