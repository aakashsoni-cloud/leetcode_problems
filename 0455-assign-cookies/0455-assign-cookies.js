/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let l = 0;
    let r = 0;

    let n = s.length

    while (l < n) {
        if (s[l] >= g[r]) {
            r++;
        }
        l++;
    }

    return r;
};