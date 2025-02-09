/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (num) {
    let count = 0;
    let max = 0;
    let i = 0;
    let n = num.length;

    while (i < n) {

        if (num[i] == 0) {
            count = 0;
        } else {
            count++;
            max = Math.max(max, count);
        }
        i++;
    }

    return max;
};