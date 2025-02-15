/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let l = 0;
    let r = 0;

    let count = 0;

    while (r <= n) {
        let item = nums[l];
        if (item == nums[r]) {
            count++;
            r++;
        }

        if (count > Math.floor(n / 2)) {
            return item;
        }

        if (nums[l] !== nums[r]) {
            l = r;
            count = 0;
        }
    }
};