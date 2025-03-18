/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let n = nums.length;
    let maxProduct = -1;
    let prefProd = 1;
    let suffProd = 1;

    if (n == 1) return nums[0]

    for (let i = 0; i < n; i++) {
        if (prefProd == 0) prefProd = 1;
        if (suffProd == 0) suffProd = 1;

        prefProd *= nums[i];
        suffProd *= nums[n - i - 1];

        maxProduct = Math.max(maxProduct, Math.max(prefProd, suffProd))
    }
    return maxProduct
};