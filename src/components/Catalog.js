import Header from "./Header"
import "../style/catalog.css"
import productInfo from "../info/productInfo"
import PreviewCard from "./PreviewCards"

const Catalog = ({items}) => {
    let cards =[]
    if (items === "all") {
        createCards(cards, productInfo.tableTop);
        createCards(cards, productInfo.card);
        createCards(cards, productInfo.accessories);
        var catalogDescription = [<div className="current-category">All</div>,
        <div className="current-category">Products</div>]
    }
    else if (items === "table-top") {
        createCards(cards, productInfo.tableTop);
        var catalogDescription = [<div className="current-category">Table Top</div>]
    }
    else if (items === "cards") {
        createCards(cards, productInfo.card);
        var catalogDescription = [<div className="current-category">Card Games</div>]
    }
    else if (items === "accessories") {
        createCards(cards, productInfo.accessories);
        var catalogDescription = [<div className="current-category">Accessories</div>]
    }

    function createCards(cards, elementList) {
        for(let i = 0; i<elementList.length; i++) {
            cards.push(
                <PreviewCard i={i} gameInfo={elementList[i]}/>
            )
        }
    }

    return(
        <div className="catalog">
            <Header darkMode={false} />
            <div className="catalog-contents">
                <div className="catalog-sidebar">
                    <div className="shopping-title">
                        <div>Shop /</div>
                        {catalogDescription}
                    </div>
                    <div className="shopping-options">
                        <a className="category-name" href="/catalog/table-top">Table Top</a>
                        <a className="category-name" href="/catalog/cards">Card Games</a>
                        <a className="category-name" href="/catalog/accessories">Accessories</a>
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