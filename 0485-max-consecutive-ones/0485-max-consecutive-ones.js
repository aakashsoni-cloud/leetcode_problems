/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let n = nums.length
    let maxNum = 0;
    let sum = 0;
    let r = 0;

    while (r < n) {
        sum += nums[r];
        if (nums[r] === 0) {
            sum = 0;
        }
        else {
            maxNum = Math.max(maxNum, sum);
        }
        r++;
    }
    return maxNum
};