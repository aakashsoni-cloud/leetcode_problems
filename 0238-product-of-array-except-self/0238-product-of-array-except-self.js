/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (num) {
    // let n = nums.length;
    // let prod = 1;
    // let answer = [];
    // answer[0] = 1;

    // for (let i = 1; i < n; i++) {
    //     answer[i] = answer[i - 1] * nums[i - 1]
    // }

    // let suffix = 1;

    // for (let j = n - 2; j >= 0; j--) {
    //     suffix *= nums[j + 1]
    //     answer[j] *= suffix;
    // }

    // return answer;

    let res = [];
    let prefixPro = [];
    let suffixPro = [];

    let n = num.length;

    prefixPro[0] = 1;
    suffixPro[n - 1] = 1;

    for (let i = 1; i < n; i++) {
        prefixPro[i] = prefixPro[i - 1] * num[i - 1];
    }
    let suffix = 1;
    for (let i = n - 2; i >= 0; i--) {
        suffix *= num[i + 1];
        suffixPro[i] = suffix;
    }

    for (let i = 0; i < n; i++) {
        res[i] = prefixPro[i] * suffixPro[i];
    }

    return res;
};