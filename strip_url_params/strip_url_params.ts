export function stripUrlParams(url: string, paramsToStrip: Array<string> = []) {
    let u: Array<string> = url.split('?');
    let p: Array<string> = u[1] && (u[1] as string).split('&');
    let map: Map<string, string> = new Map();
    p.map((el) => {
        let match = el.match(/(^[a-z0-9])+=/i);
        if (match[1] && !map.has(match[1]) && paramsToStrip.indexOf(match[1]) === -1) {
            map.set(match[1], el);
        }
    });

    return map.size > 0 ? `${u[0]}?${[...map.values()].join('&')}` : u[0];
}