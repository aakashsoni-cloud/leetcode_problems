/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let n = nums.length;
    let largest = 0;
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