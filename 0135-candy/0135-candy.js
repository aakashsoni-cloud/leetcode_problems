/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    // TC: O(2N) SC: O(N)
    let n = ratings.length;
    let leftNeigh = [];

    leftNeigh[0] = 1;

    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            leftNeigh[i] = leftNeigh[i - 1] + 1;
        } else {
            leftNeigh[i] = 1;
        }
    }

    let current = 1, right = 1;
    let sum = Math.max(1, leftNeigh[n - 1]);
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            current += 1;
            right = current;
        } else {
            current = 1;
        }
        sum = sum + Math.max(leftNeigh[i], current)
    }

    return sum;
};