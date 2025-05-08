/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let n = nums.length;

    if (n == 0) {
        return 0;
    }

    nums.sort((a, b) => a - b);

    let count = 1;
    let max = 0;

    for (let i = 1; i < n; i++) {
        if (nums[i] !== nums[i - 1]) {
            if (nums[i] == nums[i - 1] + 1) {
                count++
            } else {
                max = Math.max(max, count);
                count = 1;
            }
        }
    }
    return Math.max(max, count);
};