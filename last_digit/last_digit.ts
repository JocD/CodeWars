export function lastDigit(as: Array<number>): number {
    if (as.length === 0) {
        return 1;
    }

    let seed: number = as[as.length - 1];
    for (let i = as.length - 2; i >= 0; i--) {
        let n = as[i] % 10;
        if (i > 0) {
            seed = mod4(n, seed);
            seed = seed === 0 ? 4 : seed;
        }

        else {
            if(seed >= 10){
                seed = seed % 4;
            }
            seed = Math.pow(n, seed);
        }
    }

    return seed % 10;
}

function mod4(a: number, b: number) {
    if (b === 0) {
        return 1;
    }

    switch (a) {
        case 3:
        case 7:
            if (b % 2 === 0) {
                return 1;
            }

            else {
                return 3;
            }
        case 1:
        case 5:
        case 9:
            return 1;
        case 2:
        case 6:
            if (b === 1) {
                return 2;
            }
        default:
            return 0;
    }
}