export default function simplify(poly) {
    const str = poly.toLowerCase().replace(/ /g, '');
    const reg1 = /[+-]?\d*[a-z]+/g;
    let arr = [];

    let map = new Map();
    str.match(reg1).map((c) => {
        const reg2 = /([+-]?\d*)([a-z]*)/;
        const c2 = c.match(reg2);
        let co = 0;
        let vr = '';

        switch (c2[1]) {
            case '-':
                co = -1;
                break;
            case '':
                co = 1;
                break;
            case '+':
                co = 1;
                break;
            default:
                co = parseInt(c2[1]);
        }

        vr = c2[2].split('').sort().join('');
        if (map.has(vr)) {
            map.set(vr, map.get(vr) + co);
        }

        else {
            map.set(vr, co);
            arr.push(vr);
        }
    });

    arr.sort((a, b) => {
        if (a.length < b.length) {
            return -1;
        }

        else if (a.length > b.length) {
            return 1;
        }

        else {
            for (let i = 0; i < a.length; i++) {
                let charA = a.charCodeAt(i);
                let charB = b.charCodeAt(i);
                if (charA !== charB) {
                    return charA - charB;
                }
            }
            return 0;
        }
    });
    let ans = arr
        .reduce((p, c) => {
            let count = map.get(c);
            let sign = count > 0 ? '+' : count < 0 ? '-' : '';
            let vr = count === 0 ? '' : c;
            let co = Math.abs(count) <= 1 ? '' : Math.abs(count);
            return p + sign + co + vr;
        }, '')
        .replace(/^\+/, '');
    return ans;
}
