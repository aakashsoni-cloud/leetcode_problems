/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let sum = 0;
    let r = 0;
    let l = 0;

    while (r < nums.length) {
        if (nums[r] == 0) {
            l = r + 1;
        }
        max = Math.max(max, r - l + 1);
        r++;
    }
    return max;
};