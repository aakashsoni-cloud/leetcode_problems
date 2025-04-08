/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    let n = prices.length;

    let l = 0;
    let r = 0;
    while (r < n) {
        if (prices[r] > prices[l]) {
            maxProfit += prices[r] - prices[l];
        }
        l = r;
        r++;
    }

    return maxProfit;
};