export const prizeOptions = [
  { option: 'Segui participando', probability: 0.325, image: { uri: "/sigueparticipando.png", sizeMultiplier: 2, offsetY: 70 } },
  { option: 'Año Gratis', probability: 0.05, quantity: 5, image: { uri: "/ginHerederoBotella.png", sizeMultiplier: 2, offsetY: 70 } },
  { option: 'Segui participando', probability: 0.325, image: { uri: "/sigueparticipando.png", sizeMultiplier: 2, offsetY: 70  } },
  { option: 'Totebag', probability: 0.10, quantity: 5, image: { uri: "/bolsa.png", sizeMultiplier: 2, offsetY: 70  } },
  { option: 'Pañuelo', probability: 0.10, quantity: 5, image: { uri: "/pañuelo.png", sizeMultiplier: 2, offsetY: 70  } },
  { option: 'Abanico', probability: 0.10, quantity: 5, image: { uri: "/abanico.png", sizeMultiplier: 2, offsetY: 70 } },
  { option: 'Segui participando', probability: 0.325, image: { uri: "/sigueparticipando.png", sizeMultiplier: 2, offsetY: 70 } },
  { option: 'Cupon Descuento', probability: 0.10, quantity: 5, image: { uri: "/cupon20.png", sizeMultiplier: 2, offsetY: 70 } },
  { option: 'Piluso', probability: 0.10, quantity: 5, image: { uri: "/australiano.png", sizeMultiplier: 2, offsetY: 70  } },
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
