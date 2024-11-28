/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (arr, k) {
    let lsum = 0;
    let rsum = 0;
    let right = arr.length - 1;
    let maxSum = 0;

    for (let i = 0; i <= k - 1; i++) {
        lsum += arr[i];
    }
    maxSum = lsum;

    for (let i = k - 1; i >= 0; i--) {
        lsum -= arr[i];
        rsum += arr[right];
        right--;
        maxSum = Math.max(maxSum, lsum + rsum)
    }

    return maxSum;
};