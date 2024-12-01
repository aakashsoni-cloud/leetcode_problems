/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {

    let n = fruits.length;
    let output = {};
    let l = 0;
    let maxLength = 0;

    for (let r = 0; r < n; r++) {
        output[fruits[r]] = (output[fruits[r]] || 0) + 1;

        if (Object.entries(output).length > 2) {
            output[fruits[l]] -= 1;
            if (output[fruits[l]] === 0) {
                delete output[fruits[l]];
            }
            l++;
        }

        if (Object.entries(output).length <= 2) {
            maxLength = Math.max(maxLength, r - l + 1)
        }
    }

    return maxLength
};