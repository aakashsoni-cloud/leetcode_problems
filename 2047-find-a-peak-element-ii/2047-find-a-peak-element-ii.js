/**
 * @param {number[][]} mat
 * @return {number[]}
 */

var maxElement = function (arr, n, m, col) {
    let max = -1;
    let index = -1;
    for (let i = 0; i < n; i++) {
        if (arr[i][col] > max) {
            max = arr[i][col];
            index = i;
        }
    }
    return index;
}
var findPeakGrid = function (mat) {
    let n = mat.length;
    let m = mat[0].length;

    let low = 0;
    let high = m - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let row = maxElement(mat, n, m, mid);
        let left = mid - 1 >= 0 ? mat[row][mid - 1] : -1;
        let right = mid + 1 < m ? mat[row][mid + 1] : -1;

        if (mat[row][mid] > left && mat[row][mid] > right) {
            return [row, mid];
        } else if (mat[row][mid] < left) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
};