/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    let n = ratings.length;
    let leftNeigh = [];
    let rigthNeigh = [];

    leftNeigh[0] = 1;
    rigthNeigh[n - 1] = 1;

    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            leftNeigh[i] = leftNeigh[i - 1] + 1;
        } else {
            leftNeigh[i] = 1;
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            rigthNeigh[i] = rigthNeigh[i + 1] + 1;
        } else {
            rigthNeigh[i] = 1;
        }
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += Math.max(leftNeigh[i], rigthNeigh[i])
    }

    return sum;

};