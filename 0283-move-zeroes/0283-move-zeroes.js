/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let n = nums.length;
    let i = 0;
    for (let j = 0; j < n; j++) {
        if (nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++;
        }
    }

    return nums;
};