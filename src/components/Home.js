import Header from "./Header";
import "../style/home.css"
import background from "../images/board-game-background2.jpg";
import { Link } from "react-router-dom";

const Home = ({cart}) => {
    return(
        <div className="Home" style={{
            background: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'}}>
            <Header darkMode={true} cart={cart}></Header>
            <div className="home-contents">
                <div className="home-text-title">Board Games for You</div>
                <div className="home-text">All games avaliable for preorder, shipping December, 2023</div>
                <Link className="shop-now-button button" to="/catalog">SHOP NOW</Link>
            </div>
        </div>
    )
}

export default Home;