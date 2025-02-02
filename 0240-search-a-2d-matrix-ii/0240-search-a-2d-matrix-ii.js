/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function (matrix, target) {
    let n = matrix.length; // row
    let m = matrix[0].length; // col
    let row = 0;
    let col = m - 1;
    while (row < n && col >= 0) {
        if (matrix[row][col] == target) return true;

        if (matrix[row][col] < target) {
            row = row + 1;
        } else {
            col = col - 1;
        }
    }
    return false;
};