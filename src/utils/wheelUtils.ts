import seguiparticipando from "../assets/images/sigueparticipando.png";
import herederoBotella from "../assets/images/ginHerederoBotella.png"
import bolsa from "../assets/images/bolsa.png"
import panuelo from "../assets/images/pañuelo.png"
import abanico from "../assets/images/abanico.png"
import cupon20 from "../assets/images/cupon20.png"
import consumicion from "../assets/images/consumicion.png"
import australiano from "../assets/images/australiano.png"


export const prizeOptions = [
    {option: 'Segui participando', probability: 0.25, image: {uri: seguiparticipando, sizeMultiplier: 2, offsetY: 70}},
    {option: 'Totebag', probability: 0.10, quantity: 5, image: {uri: bolsa, sizeMultiplier: 2, offsetY: 70}},
    {option: 'Pañuelo', probability: 0.10, quantity: 5, image: {uri: panuelo, sizeMultiplier: 2, offsetY: 70} },
    {option: 'Segui participando', probability: 0.25, image: {uri: seguiparticipando, sizeMultiplier: 2, offsetY: 70}},
    {option: 'Abanico', probability: 0.10, quantity: 5, image: {uri: abanico, sizeMultiplier: 2, offsetY: 70}},
    {option: 'Consumición', probability: 0.10, quantity: 5, image: {uri: consumicion, sizeMultiplier: 2, offsetY: 70}},
    {option: 'Australiano/Piluso', probability: 0.10, quantity: 5, image: {uri: australiano, sizeMultiplier: 2, offsetY: 70}},
];

export const getRandomPrize = (data: { option: string; probability: number; quantity?: number }[]) => {
const random = Math.random();
let sum = 0;
const validOptions = data.filter(item => item.probability > 0 && (item.quantity === undefined || item.quantity > 0));
console.log(validOptions);

    for (let i = 0; i < validOptions.length; i++) {
        sum += validOptions[i].probability;
        if (random <= sum) {
            const prizeIndex = data.findIndex(item => item.option === validOptions[i].option);
            console.log(prizeIndex);
            if (data[prizeIndex].quantity !== undefined) {
                data[prizeIndex].quantity! -= 1;
                if (data[prizeIndex].quantity === 0) {
                    data[prizeIndex].probability = 0;
                }
            }
            return prizeIndex;
        }
    }
    return 0;
};
