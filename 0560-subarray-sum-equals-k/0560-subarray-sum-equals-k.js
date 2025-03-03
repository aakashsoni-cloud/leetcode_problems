/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (num, k) {
    let n = num.length;
    let sum;
    let count = 0;

    for (let i = 0; i < n; i++) {
        sum = 0;
        for (let j = i; j < n; j++) {
            sum += num[j];
            if (sum == k) {
                count++;
            }
        }
    }

    return count;
};