/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
    let totalNumbers = (high - low) + 1;
    let countOdd;
    if (totalNumbers % 2 !== 0) {
        countOdd = Math.floor((high + 1) / 2) - Math.floor(low / 2);
    } else {
        countOdd = Math.floor(totalNumbers / 2);
    }
    return countOdd;
};