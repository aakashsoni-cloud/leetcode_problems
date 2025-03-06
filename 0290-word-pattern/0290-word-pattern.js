/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let map = {};
    pattern = pattern.split("");
    s = s.split(" ");
    let n = s.length;

    if (pattern.length !== s.length) return false;

    for (let i = 0; i < n; i++) {
        if (map[pattern[i]]) {
            if (map[pattern[i]] != s[i]) {
                return false;
            }
        } else {
            if (!(Object.values(map).includes(s[i]))) {
                map[pattern[i]] = s[i];
            } else {
                return false;
            }
        }
    }
    return true
};