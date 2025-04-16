/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
    let totalNumbers = (high - low) + 1;
    let countOdd = Math.floor((high + 1) / 2) - Math.floor(low / 2);
    return countOdd;
};