import Header from "./Header";
import "../style/home.css"
import background from "../images/board-game-background2.jpg";

const Home = () => {
    return(
        <div className="Home" style={{
            background: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'}}>
            <Header darkMode={true}></Header>
            <div className="home-contents">
                <div className="home-text-title">Board Games for You</div>
                <div className="home-text">All games avaliable for preorder, shipping December, 2023</div>
                <a className="shop-now-button button" href="/catalog">SHOP NOW</a>
            </div>
        </div>
    )
}

export default Home;