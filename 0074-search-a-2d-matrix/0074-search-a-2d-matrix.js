/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] == target) return true;
        else if (target > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}

var searchMatrix = function (arr, target) {
    let n = arr.length;
    let m = arr[0].length;
    for (let i = 0; i < n; i++) {
        if (arr[i][0] <= target && target <= arr[i][m - 1]) {
            return binarySearch(arr[i], target);
        }
    }
    return false;
};