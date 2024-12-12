/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
    let l = 0;
    let r = 0;
    let maxLength = 0

    let map = new Map();
    let sum = 0

    nums = nums.sort((a, b) => a - b)

    while (r < nums.length) {
        sum += nums[r];

        while (sum + k < nums[r] * (r - l + 1)) {
            sum -= nums[l];
            l++;
        }
        maxLength = Math.max(maxLength, r - l + 1);
        r++;
    }

    return maxLength;
};