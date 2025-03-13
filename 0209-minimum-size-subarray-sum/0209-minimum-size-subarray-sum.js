/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let n = nums.length;
    let minLength = Number.MAX_SAFE_INTEGER;

    let l = 0;
    let r = 0;

    let sum = 0;

    while (r < n) {
        sum += nums[r];
        while (sum >= target) {
            minLength = Math.min(minLength, r - l + 1);
            sum -= nums[l];
            l++;
        }
        r++;
    }

    return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength;
};