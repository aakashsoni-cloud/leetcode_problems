/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let n = nums.length;
    let l = 1;
    let r = 1;

    while (r < n) {
        if (nums[l - 1] !== nums[r]) {
            nums[l] = nums[r];
            l++;
        }
        r++;

    }

    return l
};