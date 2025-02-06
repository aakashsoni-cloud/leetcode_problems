/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let n = nums.length;
    let xor1 = 0, xor2 = 0;

    for (let i = 0; i <= n - 1; i++) {
        xor2 = xor2 ^ nums[i];
    }

    return xor2
};