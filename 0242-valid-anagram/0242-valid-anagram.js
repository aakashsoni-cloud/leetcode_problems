/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let letters = {};
    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
        letters[s[i]] = (letters[s[i]] || 0) + 1; // increment the count 
        letters[t[i]] = (letters[t[i]] || 0) - 1; // if found same decrease the count, if not found any letter already from s make it -1
    }

    for (let letter in letters) {
        if (letters[letter] !== 0) return false;
    }
    return true
};