/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (arr) {
    let n = arr.length;
    let hash = Array.from(Array(n + 1).fill(0));

    for (let i = 0; i <= n; i++) {
        hash[arr[i]] = 1;
    }

    for (let i = 0; i <= n; i++) {
        if (hash[i] == 0) {
            return i;
        }
    }
};