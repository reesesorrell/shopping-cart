const PreviewCard = ({i, gameInfo}) => {

    return (
        <div className="preview-card" key={i}>
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
        </div>
    )
}

export default PreviewCard