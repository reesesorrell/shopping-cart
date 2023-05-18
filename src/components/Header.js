import "../style/header.css"

const Header = ({darkMode}) => {
    return (
        <div className={darkMode ? "darkHeader" : "lightHeader"}>
            <a href="/" className="title">Sorrell Games</a>
            <div className="right-header-container">
                <div>Shop</div>
                <div>Search</div>
                <div>Bag</div>
            </div>
        </div>
    )
}

export default Header;