/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let i = 1;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== 0) {
            [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];
            i++;
        }
    }
    return nums;
};