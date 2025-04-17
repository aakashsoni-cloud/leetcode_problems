/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (arr) {
    let n = arr.length;
    arr.sort((a, b) => a[0] - b[0]);
    let result = [];

    for (let i = 0; i < n; i++) {
        if (!result.length || arr[i][0] > result[result.length - 1][1]) {
            result.push(arr[i]);
        }

        result[result.length - 1][1] = Math.max(result[result.length - 1][1], arr[i][1])

    }

    return result
};