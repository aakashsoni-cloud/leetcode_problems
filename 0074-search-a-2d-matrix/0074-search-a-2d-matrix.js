/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function (arr, target) {
    let n = arr.length;
    let m = arr[0].length;
    let low = 0;
    let high = n * m - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let row = Math.floor(mid / m);
        let col = mid % m;

        if (arr[row][col] == target) return true;
        else if (arr[row][col] < target) low = mid + 1;
        else high = mid - 1;
    }
    return false;
};