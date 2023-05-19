import seventhContinentInside from "../images/insideSeventhContinent.png"
import seventhContinentFront from "../images/seventhContinent.png"
import ticketToRideInside from "../images/ticketToRideInside.jpg"
import ticketToRideFront from "../images/ticketToRideFront.png"
import diceFront from "../images/diceFront.png"
import diceBack from "../images/diceBack.jpg"
import sevenWondersFront from "../images/sevenWondersFront.png"
import sevenWondersBack from "../images/sevenWondersBack.png"

const product = (name, price, frontImg, hoverImg) => {
    return {name, price, frontImg, hoverImg};
}

const productInfo = {
    tableTop: [
        product('7th Continent', 49.99, seventhContinentFront, seventhContinentInside),
        product('Ticket to Ride', 29.99, ticketToRideFront, ticketToRideInside),
        product('7 Wonders', 34.99, sevenWondersFront, sevenWondersBack)
    ],
    card: [
    ],
    accessories: [
        product('D&D Dice', 9.99, diceFront, diceBack)
    ]
}

export default productInfo;