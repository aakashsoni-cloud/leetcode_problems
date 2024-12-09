/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let k = 0; n = nums.length;

    for (let i = 0; i < n; i++) {
     
        if (nums[i] > nums[(i + 1) % n]) {
            k++;
        }


        if (k > 1) {
            return false;
        }

    }
    return true;
};