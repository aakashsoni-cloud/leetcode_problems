/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let n = nums.length;

    if (n == 1) {
        return nums[0]
    }
    let maxProduct = -1;
    let prod = 1;
    for (let i = 0; i < n; i++) {
        prod = 1;
        for (let j = i; j < n; j++) {
            prod *= nums[j];
            maxProduct = Math.max(maxProduct, prod)
        }
    }
    return maxProduct
};