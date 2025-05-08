/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let n = fruits.length;
    let basket = new Map();
    let max = 0;

    let l = 0;
    let r = 0;

    while (r < n) {
        basket.set(fruits[r], (basket.get(fruits[r]) || 0) + 1);

        if (basket.size > 2) {
            basket.set(fruits[l], basket.get(fruits[l]) - 1);
            if (basket.get(fruits[l]) == 0) {
                basket.delete(fruits[l]);
            }
            l++;
        }

        if (basket.size <= 2) {
            max = Math.max(max, r - l + 1);
        }
        r++;
    }
    return max;
};