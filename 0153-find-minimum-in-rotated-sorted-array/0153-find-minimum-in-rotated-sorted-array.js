/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (arr) {
    let n = arr.length;
    let low = 0;
    let high = n - 1;
    let min = Number.MAX_VALUE;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // left sorted
        if (arr[low] <= arr[mid]) {
            min = Math.min(min, arr[low]);
            low = mid + 1;
        }

        // right sorted
        if (arr[mid] <= arr[high]) {
            min = Math.min(min, arr[mid]);
            high = mid - 1;
        }
    }

    return min;

};
