import Header from "./Header";
import "../style/home.css"
import backgroundImage from "../images/board-game-background.png";

const Home = () => {
    return(
        <div className="Home">
            <Header darkMode={true}></Header>
            <div className="home-contents">
                <div>Board Games for You</div>
                <div>All games avaliable for preorder, shipping December, 2023</div>
                <button>Shop Now</button>
            </div>
        </div>
    )
}

export default Home;