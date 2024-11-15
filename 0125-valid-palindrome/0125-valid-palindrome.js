/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s.length === 0) {
        return false;
    }
    s = s.toLowerCase().replace(/[^a-z0-9/]/gi, '');

    let start = 0;
    let end = s.length - 1;

    while (start <= end) {
        if (s[start] !== s[end]) return false;
        start++;
        end--;
    }
    return true;
};