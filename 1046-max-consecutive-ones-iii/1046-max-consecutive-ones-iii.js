/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let n = nums.length;
    let l = 0;
    let r = 0;

    let countZero = 0;
    let maxLength = 0;

    while (r < n) {
        if (nums[r] == 0) {
            countZero++;
        }
        while (countZero > k) {
            if (nums[l] == 0) {
                countZero--;
            }
            l++;
        }
        maxLength = Math.max(maxLength, r - l + 1);
        r++;
    }
    return maxLength
};