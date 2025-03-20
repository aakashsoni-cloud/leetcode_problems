/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (num, k) {
    let n = num.length;

    let count = 0;

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += num[j];
            if (sum == k) {
                count++;
            }
        }
    }
    return count;
};