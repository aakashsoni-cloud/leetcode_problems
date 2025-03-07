/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let n = nums.length;
    let prod = 1;
    let answer = [];
    answer[0] = 1;

    for (let i = 1; i < n; i++) {
        answer[i] = answer[i - 1] * nums[i - 1]
    }

    let suffix = 1;

    for (let j = n - 2; j >= 0; j--) {
        suffix *= nums[j + 1]
        answer[j] *= suffix;
    }

    return answer;
};