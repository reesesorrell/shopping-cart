import "../style/header.css"

const Header = ({darkMode}) => {
    return (
        <div className={darkMode ? "darkHeader" : "lightHeader"}>
            <div className="title">Sorrell Games</div>
            <div className="right-header-container">
                <div>Shop</div>
                <div>Search</div>
                <div>Bag</div>
            </div>
        </div>
    )
}

export default Header;