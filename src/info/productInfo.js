const product = (name, price, frontImg, hoverImg) => {
    return {name, price, frontImg, hoverImg};
}

const productInfo = {
    tableTop: [
        product('7th Continent', '49.99'),
        product('7 Wonders', '29.99')
    ],
    card: [],
    accessories: []
}

export default productInfo;