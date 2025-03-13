/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let n = nums.length;
    let l = 0;
    let r = 1;

    while (r < n) {
        if (nums[l] !== nums[r]) {
            nums[l + 1] = nums[r];
            l++;
            r++
        } else {
            r++;
        }

    }

    return l+1
};