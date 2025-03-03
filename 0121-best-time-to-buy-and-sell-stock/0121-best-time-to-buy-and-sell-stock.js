/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // let mini = prices[0];
    // let maxProfit = 0;
    // let n = prices.length;

    // for (let i = 1; i < n; i++) {
    //     let profit = prices[i] - mini;
    //     maxProfit = Math.max(maxProfit, profit);
    //     mini = Math.min(mini, prices[i])
    // }

    // return maxProfit;

    let maxProfit = 0;
    let n = prices.length;

    let l = 0;
    let r = 0;

    while (r < n) {
        let profit = prices[r] - prices[l];
        if (prices[r] < prices[l]) {
            l = r;
        }
        maxProfit = Math.max(maxProfit, profit);
        r++;
    }

    return maxProfit;
};