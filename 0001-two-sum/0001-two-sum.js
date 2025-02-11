/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (arr, target) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            if (arr[i] + arr[j] == target) {
                return [i, j];
            }
        }
    }
};