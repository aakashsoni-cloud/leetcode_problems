/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (arr) {
    let n = arr.length;
    arr.sort((a, b) => a - b);

    if (n == 1) return arr[0]
    let count = 1;
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] == arr[i + 1]) {
            count++;
        }

        if (arr[i] != arr[i + 1]) {
            count = 1;
        }
        if (count > Math.floor(n / 2)) {
            return arr[i];
        }
    }
};