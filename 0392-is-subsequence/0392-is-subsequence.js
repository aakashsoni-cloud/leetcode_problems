/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s.length > t.length) return false;

    let l = 0;
    let count = 0;

    for (let i = 0; i < t.length; i++) {
        if (s[l] == t[i]) {
            l++;
            count++;
        }
    }

    return count == s.length;
};