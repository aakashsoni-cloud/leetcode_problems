/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (arr) {
    // Approch 1 Linear Search TC O(N)

    let n = arr.length - 1;
    if (n === 1) return arr[0];
    for (let i = 0; i <= n; i++) {
        if (i == 0) {
            if (arr[i] !== arr[i + 1]) {
                return arr[i];
            }
        }
        else if (i == n) {
            if (arr[n] !== arr[n - 1]) {
                return arr[i];
            }
        }
        else {
            if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
                return arr[i]
            }
        }
    }
};