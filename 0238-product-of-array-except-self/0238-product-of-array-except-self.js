/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let n = nums.length;

    let result = [];
    result[0] = 1;

    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    let product = 1;

    for (let i = n - 2; i >= 0; i--) {
        product *= nums[i + 1];
        result[i] *= product;
    }

    return result;
}; 