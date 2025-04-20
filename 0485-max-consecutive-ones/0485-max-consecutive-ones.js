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
        sum += nums[r];

        if (nums[r] == 0) {
            sum = 0
        }
        max = Math.max(max, sum);
        r++;
    }
    return max;
};