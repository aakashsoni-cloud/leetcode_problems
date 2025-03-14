/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let n = nums.length;
    let seenMap = {};
    for (let i = 0; i < n; i++) {
        if (seenMap.hasOwnProperty(nums[i]) && i - seenMap[nums[i]] <= k) {
            return true;
        }
        seenMap[nums[i]] = i;

    }
    return false;
};