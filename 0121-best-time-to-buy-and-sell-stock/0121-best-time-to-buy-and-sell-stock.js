/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let n = prices.length;
    let profit = 0;
    let maxProfit = 0;
    let l = 0; // Buy
    let r = 1; // Sell

    while (r < n) {
        profit = prices[r] - prices[l];
        if (prices[r] < prices[l]) {
            l = r;
        }
        maxProfit = Math.max(maxProfit, profit);
        r++;
    }

    return maxProfit;
};