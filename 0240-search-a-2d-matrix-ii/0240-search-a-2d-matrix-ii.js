/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    // Brute -> O(N^2)

    // Optimise -> 

    let n = matrix.length;
    let m = matrix[0].length;

    let row = 0;
    let col = m - 1;

    while (row < n && col >= 0) {

        if (matrix[row][col] == target) {
            return true;
        }

        if (matrix[row][col] < target) {
            row = row + 1;
        } else {
            col = col - 1;
        }
    }

    return false;

};