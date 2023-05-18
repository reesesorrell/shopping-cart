const product = (name, price, frontImg, hoverImg) => {
    return {name, price, frontImg, hoverImg};
}

const productInfo = {
    tableTop: [
        product('7th Continent', '49.99'),
        product('Ticket to Ride', '29.99'),
    ],
    card: [
        product('Improv Game', '14.99')
    ],
    accessories: []
}

export default productInfo;