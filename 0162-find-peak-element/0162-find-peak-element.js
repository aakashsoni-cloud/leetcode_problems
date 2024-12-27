/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (arr) {
    // Linear Search 
    let n = arr.length;
    for (let i = 0; i <= n - 1; i++) {
        if ((i == 0 || arr[i - 1] < arr[i]) && (i == n - 1 || arr[i] > arr[i + 1])) {
            return i;
        }
    }
};