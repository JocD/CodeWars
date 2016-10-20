"use strict";
function stripUrlParams(url, paramsToStrip = []) {
    let u = url.split('?');
    let p = u[1] && u[1].split('&');
    let map = new Map();
    p.map((el) => {
        let match = el.match(/(^[a-z0-9])+=/i);
        if (match[1] && !map.has(match[1]) && paramsToStrip.indexOf(match[1]) === -1) {
            map.set(match[1], el);
        }
    });
    return map.size > 0 ? `${u[0]}?${[...map.values()].join('&')}` : u[0];
}
exports.stripUrlParams = stripUrlParams;
//# sourceMappingURL=strip_url_params.js.map