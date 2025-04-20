/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
    let lsum = 0;
    let rsum = 0;
    let maxPoints = 0;

    for (let i = 0; i < k; i++) {
        lsum += cardPoints[i];
    }
    maxPoints = lsum;

    let l = k - 1;
    let r = cardPoints.length - 1;

    while (l >= 0) {
        lsum -= cardPoints[l];
        rsum += cardPoints[r];
        l--;
        r--;

        maxPoints = Math.max(maxPoints, lsum + rsum)
    }
    return maxPoints;
};