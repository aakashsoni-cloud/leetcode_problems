/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    let n = num.length;
    for (let i = n; i >= 0; i--) {
        if (num[i - 1] % 2 !== 0) {
            return num.slice(0, i);
        }
    }
    return "";
};