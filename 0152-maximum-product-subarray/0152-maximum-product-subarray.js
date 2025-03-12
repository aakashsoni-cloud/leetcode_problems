/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let n = nums.length;
    let currPro = 1;
    let maxPro = -1;

    if (n == 1) return nums[0]

    for (let i = 0; i < n; i++) {
        currPro = 1;
        // maxPro = Math.max(maxPro, currPro);

        for (let j = i; j < n; j++) {
            currPro *= nums[j];
            maxPro = Math.max(maxPro, currPro);
        }
    }
    return maxPro;
};