/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
    let l = k - 1;
    let r = cardPoints.length - 1;

    let lSum = 0;
    let rSum = 0;

    for (let i = 0; i < k; i++) {
        lSum += cardPoints[i];
    }

    let maxSum = lSum;

    while (l >= 0) {
        lSum -= cardPoints[l];
        rSum += cardPoints[r];
        l--;
        r--;

        maxSum = Math.max(maxSum, lSum + rSum);
    }

    return maxSum;
};