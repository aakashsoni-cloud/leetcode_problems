/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var binarySearch = function (arr, target) {
    let n = arr.length;
    let low = 0;
    let high = n - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] == target) return true;

        if (arr[mid] <= target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return false;
}
var searchMatrix = function (matrix, target) {
    // Brute -> O(N^2) two loops
    // Better -> Binary with worst time
    let n = matrix.length;
    let m = matrix[0].length

    for (let i = 0; i < n; i++) {
        if (matrix[i][0] <= target && matrix[i][m - 1] >= target) {
            return binarySearch(matrix[i], target);
        }
    }
    return false;
};