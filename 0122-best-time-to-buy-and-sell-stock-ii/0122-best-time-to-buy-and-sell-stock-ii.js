/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profitSum = 0;
    let n = prices.length;

    let l = 0;
    let r = 1;

    while (r < n) {
        if (prices[r] > prices[l]) {
            profitSum += prices[r] - prices[l];
        }
        l = r;
        r++;
    }

    return profitSum;
};