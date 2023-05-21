import { Link } from "react-router-dom"

const PreviewCard = ({gameInfo, gameKey}) => {

    return (
        <Link className="preview-card" to={`/products/${gameKey}`} key={gameKey}>
            <div className="image-area">
                <img className="bottom" src={gameInfo.hoverImg}></img>
                <img className="top" src={gameInfo.frontImg}></img>
            </div>
            <div className="description">
                <div className="preview-name">
                    {gameInfo.name}
                </div>
                <div className="preview-price">
                    {'$' + gameInfo.price}
                </div>
            </div>
        </Link>
    )
}

export default PreviewCard