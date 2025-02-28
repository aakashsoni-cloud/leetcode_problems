/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {

    let n = matrix.length;
    let m = matrix[0].length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < m; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < Math.floor(m / 2); j++) {
            [matrix[i][j], matrix[i][m - 1 - j]] = [matrix[i][m - 1 - j], matrix[i][j]];
        }
    }
};