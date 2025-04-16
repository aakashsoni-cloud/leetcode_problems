/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (arr) {

    let n = arr.length;
    let l = 0;
    let r = 0;

    while (r < n) {
        if (arr[r] !== 0) {
            [arr[r], arr[l]] = [arr[l], arr[r]]
            r++;
            l++;
        } else {
            r++;
        }
    }
    return arr;
};