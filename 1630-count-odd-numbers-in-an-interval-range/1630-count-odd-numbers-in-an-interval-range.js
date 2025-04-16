/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
    if (low % 2 == 0) {
        return Math.floor((high - low + 1) / 2)
    } else {
        return Math.ceil((high - low + 1) / 2)
    }
};