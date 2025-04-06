/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (arr) {
    let n = arr.length;
    let count = 0;
    let elem;

    for (let i = 0; i < n; i++) {
        if (count == 0) {
            count = 1;
            elem = arr[i];
        } else if (elem == arr[i]) {
            count++;
        } else {
            count--;
        }
    }

    let count1 = 0;

    for (let i = 0; i < n; i++) {
        if (elem == arr[i]) {
            count1++;
        }
    }

    if (count1 > Math.floor(n / 2)) {
        return elem;
    }
};