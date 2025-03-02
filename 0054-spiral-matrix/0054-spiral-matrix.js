/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let n = matrix.length;
    let m = matrix[0].length;

    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = m - 1;

    let arr = [];

    // top

    while (top <= bottom && left <= right) {

        for (let i = left; i <= right; i++) {
            arr.push(matrix[top][i])
        }
        top++;

        // right
        for (let i = top; i <= bottom; i++) {
            arr.push(matrix[i][right])
        }
        right--;

        // bottom

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                arr.push(matrix[bottom][i])
            }
            bottom--;
        }

        // left
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                arr.push(matrix[i][left])
            }
            left++;
        }
    }

    return arr;
};