/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let n = numbers.length;
    let l = 0;
    let r = n - 1;

    while (l < r) {
        let sum = numbers[l] + numbers[r];

        if (sum == target) {
            return [l + 1, r + 1]
        } else if (sum > target) {
            r--;
        } else {
            l++;
        }
    }

};