/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let maxLength = 0;
    let sum;
    let count = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        sum = 0;
        for (let j = i; j < n; j++) {
            sum += nums[j];

            if (sum === k) {
                count++;
            }
            maxLength = Math.max(maxLength, count)
        }
    }

    return maxLength;
};