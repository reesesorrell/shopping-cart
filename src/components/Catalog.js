import Header from "./Header"
import "../style/catalog.css"
import productInfo from "../info/productInfo"

const Catalog = ({items}) => {
    let cards =[]
    if (items === "all") {
        createCards(cards, productInfo.tableTop);
        createCards(cards, productInfo.card);
        createCards(cards, productInfo.accessories);
    }

    function createCards(cards, elementList) {
        for(let i = 0; i<elementList.length; i++) {
            cards.push(
                <div key={i}>
                    {elementList[i].name + ' ' + elementList[i].price}
                </div>
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
                        <div className="current-category">All</div>
                        <div className="current-category">Products</div>
                    </div>
                    <div className="shopping-options">
                        <a className="category-name">Table Top</a>
                        <a className="category-name">Card Games</a>
                        <a className="category-name">Accessories</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalog