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

const product = (name, price, category, frontImg, hoverImg) => {
    return {name, price, category, frontImg, hoverImg};
}

const productInfo = {
    'seventh-continent': product('7th Continent', 49.99, 'table-top', seventhContinentFront, seventhContinentInside),
    'ticket-to-ride': product('Ticket to Ride', 29.99, 'table-top', ticketToRideFront, ticketToRideInside),
    'seven-wonders': product('7 Wonders', 34.99, 'table-top', sevenWondersFront, sevenWondersBack),
    'uno': product('Uno', 9.99, 'cards', unoFront, unoBack),
    'sushi-go': product('Sushi Go!', 12.99, 'cards', sushiFront, sushiBack),
    'dice': product('D&D Dice', 9.99, 'accessories', diceFront, diceBack),
    'hourglass': product('Hourglass', 4.99, 'accessories', hourglassFront, hourglassBack) 
}

export default productInfo;