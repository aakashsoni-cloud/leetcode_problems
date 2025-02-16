/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let positiveIndex = 0;
    let negativeIndex = 1;
    let n = nums.length;

    let ans = new Array();
    for (let i = 0; i < n; i++) {
        if (nums[i] < 0) {
            ans[negativeIndex] = nums[i];
            negativeIndex += 2;
        } else {
            ans[positiveIndex] = nums[i];
            positiveIndex += 2;
        }
    }
    return ans;
};