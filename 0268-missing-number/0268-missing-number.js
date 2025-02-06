/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (arr) {
       let n = arr.length;
    let sum = (n * (n + 1)) / 2;
    let s2 = 0;
    for (let i = 0; i < n; i++) {
        s2 += arr[i];
    }

    return sum - s2;
};