/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    return subArrays(nums, k) - subArrays(nums, k - 1);
};

var subArrays = function (nums, k) {
    let r = 0;
    let l = 0;
    let sum = 0;
    let count = 0;

    if (k < 0) return 0;
    while (r <= nums.length - 1) {
        sum += nums[r] % 2;

        while (sum > k) {
            sum -= nums[l] % 2;
            l++;
        }

        count += (r - l + 1);
        r++;
    }

    return count;
}