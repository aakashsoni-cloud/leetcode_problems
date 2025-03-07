/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let str = s.replace(/[:,_-\W]/g, "").toLowerCase();
    let n = str.length;

    let l = 0;
    let r = n - 1;

    while (l <= r) {
        if (str[l] !== str[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};