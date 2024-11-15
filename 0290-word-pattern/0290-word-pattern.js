/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let obj = {};
    pattern = pattern.split("");
    s = s.split(" ");
    let i = 0;

    if (pattern.length !== s.length) return false;

    for (let letter of pattern) {
        if (obj[letter]) {
            if (obj[letter] != s[i]) {
                return false;
            }
        } else {
            if (!(Object.values(obj)).includes(s[i])) {
                obj[letter] = s[i];
            } else {
                return false;
            }
        }
        i++;
    }

    return true;

};