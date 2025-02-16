/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;

    let l = 0;
    let r = 1;

    while (r < prices.length) {
        let profit = prices[r] - prices[l];
        maxProfit = Math.max(maxProfit, profit);

        if (prices[l] > prices[r]) {
            l = r;
        }
        r++;
    }

    return maxProfit;

};