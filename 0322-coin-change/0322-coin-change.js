/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var countWaysToChange = function (arr, index, target, dp) {

    let n = arr.length;
    let prev = new Array(target + 1).fill(0);
    let cur = new Array(target + 1).fill(0);
    for (let t = 0; t <= target; t++) {
        prev[t] = t % arr[0] === 0 ? t / arr[0] : Infinity;
    }
    for (let i = 1; i < n; i++) {
        for (let t = 0; t <= target; t++) {
            let notTake = prev[t];
            let take = Infinity;
            if (arr[i] <= t) take = 1 + cur[t - arr[i]];
            cur[t] = Math.min(take, notTake);
        }
        prev = [...cur];
    }
    let res = prev[target];
    return res >= Infinity ? -1 : res;

}
var coinChange = function (coins, amount) {
    let n = coins.length;
    let dp = Array.from({ length: n }, () => Array(amount + 1).fill(-1));
    return countWaysToChange(coins, n, amount, dp);
};