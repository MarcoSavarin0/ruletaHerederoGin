export const prizeOptions = [
    { option: 'Cupon Descuento', probability: 0.10 },
    { option: 'Pañuelo', probability: 0.10 },
    { option: 'Piluso', probability: 0.10 },
    { option: 'Segui participando', probability: 0.325 },
    { option: 'Año Gratis', probability: 0.05 },
    { option: 'Segui participando', probability: 0.325  },
];

export const getRandomPrize = (data: { option: string; probability: number }[]) => {
    const random = Math.random();
    let sum = 0;
    const validOptions = data.filter(item => item.probability > 0);

    for (let i = 0; i < validOptions.length; i++) {
        sum += validOptions[i].probability;
        if (random <= sum) {
            return data.findIndex(item => item.option === validOptions[i].option);
        }
    }
    return 0;
};