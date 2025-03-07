/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replace(/[:,_-\W]/g, "").toLowerCase();
    let n = s.length;

    let l = 0;
    let r = n - 1;

    while (l <= r) {
        if (s[l] !== s[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};