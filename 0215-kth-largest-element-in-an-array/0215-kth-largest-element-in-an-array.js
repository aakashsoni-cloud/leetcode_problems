/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let n = nums.length;
    let seen = new Set(nums);
    let largest = 0;

    if (n == 1) {
        return 1;
    }
    nums.sort((a, b) => a - b);

    let r = n - 1;

    while (r >= 0) {
        k--;
        if (k == 0) {
            largest = nums[r];
        }
        r--;
    }

    return largest;
};