/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let n = nums.length;
    let prefPro = [], sufPro = []
    prefPro[0] = 1;
    sufPro[n - 1] = 1;

    for (let i = 1; i < n; i++) {
        prefPro[i] = prefPro[i - 1] * nums[i - 1];
    }

    let sufProduct = 1;

    for (let i = n - 2; i >= 0; i--) {
        sufProduct *= nums[i + 1];
        sufPro[i] = sufProduct;
    }

    let result = []

    for (let i = 0; i < n; i++) {
        result[i] = prefPro[i] * sufPro[i]
    }

    return result;
}; 