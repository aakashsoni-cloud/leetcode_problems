/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (arr) {
    // Approch 1 Linear Search TC O(N)
    /*
    let n = arr.length;
    if (n === 1) return arr[0];
    for (let i = 0; i <= n - 1; i++) {
        if (i == 0) {
            if (arr[i] !== arr[i + 1]) {
                return arr[i];
            }
        }
        else if (i == n) {
            if (arr[n - 1] !== arr[n - 2]) {
                return arr[i];
            }
        }
        else {
            if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
                return arr[i]
            }
        }
    }
    */

    // Approch 2 Binary Search

    let n = arr.length;

    if (n === 1) return arr[0];
    // take first and last condition out first
    if (arr[0] !== arr[1]) return arr[0];
    if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];

    let low = 0;
    let high = n - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] !== arr[mid + 1] && arr[mid] !== arr[mid - 1]) {
            return arr[mid]
        }
        // (even, odd) check for both -> eleminate the right half
        // at odd and check for left or at even check for right
        if ((mid % 2 == 1 && arr[mid] == arr[mid - 1]) || (mid % 2 == 0 && arr[mid] == arr[mid + 1])) {
            low = mid + 1;
        }
        // (odd, even) check for both -> eleminate the left half 
        // at odd and check for right or at even check for left
        if ((mid % 2 == 1 && arr[mid] == arr[mid + 1]) || (mid % 2 == 0 && arr[mid] == arr[mid - 1])) {
            high = mid - 1;
        }
    }
};