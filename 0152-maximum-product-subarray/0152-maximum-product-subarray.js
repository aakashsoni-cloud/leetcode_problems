/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let n = nums.length;
    let prefix = 1;
    let suffix = 1;
    let maxPro = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < n; i++) {
        if (prefix == 0) prefix = 1;
        if (suffix == 0) suffix = 1;

        prefix = prefix * nums[i];
        suffix = suffix * nums[n - i - 1];

        maxPro = Math.max(maxPro, Math.max(prefix, suffix));
    }

    return maxPro;
};