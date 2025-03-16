/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let hash = {};
    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = (hash[s[i]] || 0) + 1;
        hash[t[i]] = (hash[t[i]] || 0) - 1;
    }

    for (let letter in hash) {
        if (hash[letter] !== 0) return false;
    }
    return true
};