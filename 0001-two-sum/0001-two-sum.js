/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let indexMaps = {};

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        if (indexMaps.hasOwnProperty(diff)) {
            return [i, indexMaps[diff]];
        }

        indexMaps[nums[i]] = i;
    }

    return null;
};