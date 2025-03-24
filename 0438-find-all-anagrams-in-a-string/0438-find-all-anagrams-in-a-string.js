/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function (s, p) {
    let n = s.length;
    let m = p.length;
    let seen = Array.from(Array(26).fill(0));
    let letters = Array.from(Array(26).fill(0));

    for (let i = 0; i < m; i++) {
        seen[p.charCodeAt(i) - 97]++;
    }

    let l = 0; // left pointer
    let r = 0; // right pointer
    let res = [];

    while (r < n) {
        letters[s.charCodeAt(r) - 97]++;
        if (r - l + 1 > m) {
            letters[s.charCodeAt(l) - 97]--;
            l++;
        }
        if (r - l + 1 == m) {
            if (JSON.stringify(letters) === JSON.stringify(seen)) {
                res.push(l);
            }
        }
        r++;
    }
    return res;
};