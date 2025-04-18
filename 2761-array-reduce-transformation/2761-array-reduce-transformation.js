/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let acc = init;

    for (let i = 0; i < nums.length; i++) {
        if (i in nums) {
            acc = fn(acc, nums[i], i, nums)
        } else {
            acc = nums[i]
        }
    }
    return acc;
};