/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let newStr = s.replace(/ +/g, " ").trim().split(' ');
    let n = newStr.length;
    let l = 0;
    let r = n - 1;

    while (l <= r) {
        if (newStr[l] !== ' ' || newStr[r] !== ' ') {
            [newStr[l], newStr[r]] = [newStr[r], newStr[l]];
        }
        l++;
        r--;
    }
    return newStr.join(' ');
};