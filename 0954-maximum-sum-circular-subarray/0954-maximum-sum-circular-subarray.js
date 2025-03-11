/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
    let n = nums.length;
    let totalSum = 0;
    let maxSum = Number.MIN_SAFE_INTEGER;
    let currMax = 0;
    let minSum = Number.MAX_SAFE_INTEGER;
    let currMin = 0;

    for (let i = 0; i < n; i++) {
        totalSum += nums[i];

        currMax = Math.max(nums[i], nums[i] + currMax);
        maxSum = Math.max(maxSum, currMax);

        currMin = Math.min(nums[i], nums[i] + currMin);
        minSum = Math.min(minSum, currMin);

    }

    if (maxSum < 0) return maxSum;

    return Math.max(maxSum, totalSum - minSum)
};