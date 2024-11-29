/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let n = nums.length;
    let l = 0;
    let r = 0;
    let maxLength = 0;
    let zeros = 0;

    while (r < n) {
        if (nums[r] == 0) {
            zeros++;
        }
        if (zeros > k) {
            if (nums[l] === 0) {
                zeros--;
            }
            l++;
        }

        if (zeros <= k) {
            let len = r - l + 1;
            maxLength = Math.max(maxLength, len);
        }
        r++;
    }
    return maxLength;
};