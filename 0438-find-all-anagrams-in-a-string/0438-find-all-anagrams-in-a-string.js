/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var isSameMap = function (a, b) {
    if (Object.keys(a).length !== Object.keys(b).length) return false;
    for (let key in a) {
        if (a[key] !== b[key]) return false;
    }
    return true;
}
var findAnagrams = function (s, p) {
    let n = s.length;
    let m = p.length;
    let seen = {};
    let letters = {};

    for (let i = 0; i < m; i++) {
        seen[p[i]] = (seen[p[i]] || 0) + 1
    }

    let l = 0;
    let r = 0
    let res = [];

    while (r < n) {
        let rightChar = s[r]
        letters[rightChar] = (letters[rightChar] || 0) + 1;

        if (r - l + 1 > m) {
            let leftChar = s[l];
            letters[leftChar]--;
            if (letters[leftChar] == 0) delete letters[leftChar];
            l++;
        }

        if (r - l + 1 == m) {
            if (isSameMap(letters, seen)) {
                res.push(l);
            }
        }
        r++;
    }
    return res;
};