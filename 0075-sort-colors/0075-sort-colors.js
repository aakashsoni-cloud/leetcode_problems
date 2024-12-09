/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let i = 1, n = nums.length
    nums = nums.sort((a, b) => a - b)
    // for (let j = 1; j < n; j++) {
    //     if (nums[j] < nums[i - 1]) {
    //         [nums[j], nums[i - 1]] = [nums[i - 1], nums[j]]
    //         i++;
    //     }
    // }
};