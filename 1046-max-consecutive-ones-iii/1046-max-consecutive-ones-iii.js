/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let n = nums.length;
    let zeroCount = 0;
    let maxNum = 0;

    let l = 0;
    let r = 0;

    while (r < n) {
        if (nums[r] == 0) {
            zeroCount++;
        }

        while (zeroCount > k) {
            if (nums[l] == 0) {
                zeroCount--;
            }
            l++;
        }
        maxNum = Math.max(maxNum, r - l + 1);
        r++;
    }

    return maxNum;
};