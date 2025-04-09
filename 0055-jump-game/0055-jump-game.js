/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let n = nums.length;
    let maxIndex = 0;

    for (let i = 0; i < n; i++) {
        if (maxIndex < i) {
            return false;
        }
        let stepJump = i + nums[i];
        maxIndex = Math.max(maxIndex, stepJump);
    }
    return true;
};