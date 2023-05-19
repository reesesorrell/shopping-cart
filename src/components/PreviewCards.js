const PreviewCard = ({gameInfo, gameKey}) => {

    return (
        <a className="preview-card" href={`/products/${gameKey}`} key={gameKey}>
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
        </a>
    )
}

export default PreviewCard