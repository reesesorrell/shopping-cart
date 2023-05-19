import seventhContinentInside from "../images/insideSeventhContinent.png"
import seventhContinentFront from "../images/seventhContinent.png"
import ticketToRideInside from "../images/ticketToRideInside.jpg"
import ticketToRideFront from "../images/ticketToRideFront.png"
import diceFront from "../images/diceFront.png"
import diceBack from "../images/diceBack.jpg"
import sevenWondersFront from "../images/sevenWondersFront.png"
import sevenWondersBack from "../images/sevenWondersBack.png"
import hourglassFront from "../images/hourglassFront.png"
import hourglassBack from "../images/hourglassBack.jpg"
import unoFront from "../images/unoFront.png"
import unoBack from "../images/unoBack.jpg"
import sushiFront from "../images/sushiFront.png"
import sushiBack from "../images/sushiBack.jpg"

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
        product('Uno', 9.99, unoFront, unoBack),
        product('Sushi Go!', 12.99, sushiFront, sushiBack)
    ],
    accessories: [
        product('D&D Dice', 9.99, diceFront, diceBack),
        product('Hourglass', 4.99, hourglassFront, hourglassBack) 
    ]
}

export default productInfo;