function solution(a, b, n) {
    const giveToMart = a;
    const getCola = b;

    let haveBottle = n;
    let cola = 0;

    while (true) {
        const bottle = parseInt(haveBottle / giveToMart);
        const left = haveBottle % giveToMart;

        cola += bottle * getCola;
        haveBottle = bottle * getCola + left;
        if (haveBottle < giveToMart) break;
    }

    return cola;
}

console.log(solution(3, 1, 20));