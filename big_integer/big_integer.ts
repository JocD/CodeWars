function normalize(input: Array<Array<string>>) {
    let len = 0;
    input.map((c) => {
        if (c[0].length > len) {
            len = c[0].length;
        }
    });

    return input.map((c) => {
        let diff = len - c[0].length;
        let str = '';
        for (let i = 0; i < diff; i++) {
            str += '0';
        }
        return str + c[0];
    });
}

export function add(input: Array<Array<string>>): string {
    let nInput = normalize(input);
    let matrix = new Array<Array<number>>(nInput.length);
    let len = matrix ? matrix.length : -1;
    for (let i = 0; i < len; i++) {
        matrix[i] = nInput[i].split('').map((c) => {
            return parseInt(c);
        });
    }
    let subLen = matrix[0] ? matrix[0].length : -1;
    if (len === -1 || subLen === -1) {
        throw new Error('Input Error: The matrix passed in is empty');
    }

    let ret = new Array<number>(subLen + 1);
    ret.fill(0);

    let sum = 0;
    for (let i = subLen - 1, retIndex = ret.length - 1; i >= 0; i--, retIndex--) {
        sum = ret[retIndex];
        for (let j = len - 1; j >= 0; j--) {
            sum += matrix[j][i] || 0;
        }
        if (sum >= 10) {
            ret[retIndex - 1] += Math.floor((sum / 10) % 10);
        }
        ret[retIndex] = Math.floor(sum % 10);
    }

    let temp = ret.join('').replace(/^0+/, '');
    return temp === '' ? '0' : temp;
}

export function multiply(num1: number | string, num2: number | string): string {
    let arr1 = typeof num1 == 'number' ? num1.toString().split('') : (num1 as string).split('');
    let arr2 = typeof num2 == 'number' ? num2.toString().split('') : (num2 as string).split('');
    let matrix = [];
    let offset = 0;

    for (let i = arr1.length - 1; i >= 0; i--) {
        let s = new Array<string>(arr1.length + arr2.length);
        s.fill('0');
        let index = s.length - 1;
        for (let j = arr2.length - 1; j >= 0; j--) {
            let prod: number = parseInt(arr1[i]) * parseInt(arr2[j]) + parseInt(s[index - offset]);
            if (prod >= 10) {
                s[index - offset - 1] = (Math.floor((prod / 10) % 10)).toString();
            }
            s[index - offset] = Math.floor(prod % 10).toString();
            index--;
        }
        matrix.push([s.join('')]);
        offset++;
    }
    return add(matrix);
}

export function pow(x: number | string, y: number | string): string {
    x = typeof x === 'string' ? x : x.toString();
    y = typeof y === 'string' ? y : y.toString();
    let prod = x;
    if (y === '0') {
        return (1).toString();
    }
    for (let i = 1; i < parseInt(y); i++) {
        prod = multiply(prod, x);
    }
    return prod;
}

export function mod4(a: number, b: number) {
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