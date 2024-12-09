/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hashMap = {};
    let n = nums.length;

    for (let i = 0; i <= n; i++) {
        let diff = target - nums[i];

        if (diff in hashMap) {
            return [i, hashMap[diff]];
        }

        hashMap[nums[i]] = i;

    }

    return null;
};