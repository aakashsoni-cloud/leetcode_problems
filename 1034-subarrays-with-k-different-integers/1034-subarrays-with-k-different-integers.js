/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarraysWithKDistinct = function (nums, k) {
    return slidingWindow(nums, k) - slidingWindow(nums, k - 1);
};

const slidingWindow = (nums, k) => {
    let l = 0;
    let r = 0;
    const map = new Map();
    let count = 0;

    while (r < nums.length) {
        map.set(nums[r], (map.get(nums[r]) || 0) + 1)

        while (map.size > k) {
            map.set(nums[l], map.get(nums[l]) - 1)

            if (map.get(nums[l]) == 0) {
                map.delete(nums[l]);
            }

            l++;
        }
        count += (r - l + 1)
        r++;
    }

    return count;
};
